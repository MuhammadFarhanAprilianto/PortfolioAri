import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Bersihkan canvas sebelumnya jika ada
    while (currentMount.firstChild) {
      currentMount.removeChild(currentMount.firstChild);
    }

    // 1. Scene & Camera
    const width = currentMount.clientWidth || window.innerWidth;
    const height = currentMount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 32);

    // 2. WebGL Renderer (Optimized for 60FPS on Mobile & Low-End GPU)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    currentMount.appendChild(renderer.domElement);

    // 3. Lighting (Soft pastel illumination — cerah, bersih, & mewah seperti awal)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x93c5fd, 1.4); // soft sky blue
    dirLight1.position.set(20, 25, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe9d5ff, 1.2); // soft lilac highlight
    dirLight2.position.set(-20, -15, 15);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x38bdf8, 2.2, 40);
    pointLight.position.set(0, 5, 10);
    scene.add(pointLight);

    // -------------------------------------------------------------
    // MATERIAL DEFINITIONS: Translucent Frosted Glass & CAD Wireframe
    // Tampilan bersih, elegan, bersinar lembut, performa 60FPS ringan
    // -------------------------------------------------------------
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.15,
      transparent: true,
      opacity: 0.82,
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });

    const itemsGroup = new THREE.Group();
    scene.add(itemsGroup);

    // -------------------------------------------------------------
    // GEOMETRIES: Teknik Mesin & Welder (Roda Gigi, Mur, Baut)
    // Ukuran proporsional sesuai request pengguna ("sebesar tadi")
    // -------------------------------------------------------------

    // 1. Roda Gigi Mesin Presisi (Precision Mechanical Spur Gear)
    const createGearGeometry = (teeth = 12, innerR = 1.0, outerR = 1.45, holeR = 0.42, depth = 0.35) => {
      const shape = new THREE.Shape();
      const step = (Math.PI * 2) / teeth;

      for (let i = 0; i < teeth; i++) {
        const angle = i * step;
        const a1 = angle;
        const a2 = angle + step * 0.25;
        const a3 = angle + step * 0.5;
        const a4 = angle + step * 0.75;

        if (i === 0) shape.moveTo(Math.cos(a1) * innerR, Math.sin(a1) * innerR);
        else shape.lineTo(Math.cos(a1) * innerR, Math.sin(a1) * innerR);
        shape.lineTo(Math.cos(a2) * outerR, Math.sin(a2) * outerR);
        shape.lineTo(Math.cos(a3) * outerR, Math.sin(a3) * outerR);
        shape.lineTo(Math.cos(a4) * innerR, Math.sin(a4) * innerR);
      }
      shape.closePath();

      const hole = new THREE.Path();
      hole.absarc(0, 0, holeR, 0, Math.PI * 2, true);
      shape.holes.push(hole);

      return new THREE.ExtrudeGeometry(shape, {
        depth: depth,
        bevelEnabled: true,
        bevelSegments: 1,
        bevelSize: 0.04,
        bevelThickness: 0.04,
      });
    };

    // 2. Mur Segi Enam Mesin (Industrial Hex Nut)
    const createHexNutGeometry = (outerR = 1.2, innerR = 0.62, depth = 0.5) => {
      const shape = new THREE.Shape();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * outerR;
        const y = Math.sin(angle) * outerR;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.closePath();

      if (innerR > 0) {
        const hole = new THREE.Path();
        hole.absarc(0, 0, innerR, 0, Math.PI * 2, true);
        shape.holes.push(hole);
      }

      return new THREE.ExtrudeGeometry(shape, {
        depth: depth,
        bevelEnabled: true,
        bevelSegments: 1,
        bevelSize: 0.06,
        bevelThickness: 0.06,
      });
    };

    // 3. Baut Baja Mesin (Hex Bolt)
    const createBoltGroup = () => {
      const group = new THREE.Group();
      const headGeom = createHexNutGeometry(1.1, 0, 0.45);
      const headMesh = new THREE.Mesh(headGeom, glassMaterial);
      const headWire = new THREE.Mesh(headGeom, wireframeMaterial);
      headWire.scale.setScalar(1.02);
      headMesh.add(headWire);
      group.add(headMesh);

      const shankGeom = new THREE.CylinderGeometry(0.48, 0.48, 1.8, 16);
      const shankMesh = new THREE.Mesh(shankGeom, glassMaterial);
      const shankWire = new THREE.Mesh(shankGeom, wireframeMaterial);
      shankWire.scale.setScalar(1.02);
      shankMesh.add(shankWire);
      shankMesh.position.set(0, 0, -0.9);
      shankMesh.rotation.x = Math.PI / 2;
      group.add(shankMesh);

      return { group, headGeom, shankGeom };
    };

    // Ukuran Geometri Asli (Tepat Sebesar Tadi)
    const gearGeom1 = createGearGeometry(14, 1.1, 1.55, 0.45, 0.35);
    const gearGeom2 = createGearGeometry(10, 0.8, 1.15, 0.32, 0.3);
    const nutGeom1 = createHexNutGeometry(1.25, 0.65, 0.55);
    const nutGeom2 = createHexNutGeometry(0.95, 0.48, 0.42);
    const boltData = createBoltGroup();

    // Posisi Dasar Geometri (Responsif terhadap Desktop & Mobile)
    const basePos = {
      gear1: { x: -11.0, y: 2.4, z: -2.5 },
      gear2: { x: -9.2, y: 4.2, z: -2.5 },
      bolt: { x: 11.0, y: 2.4, z: -2.2 },
      nut1: { x: 9.2, y: 4.2, z: -2.2 },
      nut2: { x: -10.5, y: -0.8, z: -1.8 },
      nut3: { x: 10.5, y: -0.8, z: -1.8 },
      gear3: { x: 11.2, y: -4.5, z: -2.0 },
    };

    // -------------------------------------------------------------
    // PENEMPATAN ELEMEN: PERSIS DISAMPING HURUF "M" & TULISAN "3G"
    // -------------------------------------------------------------

    // GAMBAR 1: Roda Gigi Utama - Tepat di Samping Kiri Huruf "M" (Mechanical)
    const gear1 = new THREE.Mesh(gearGeom1, glassMaterial);
    const gearWire1 = new THREE.Mesh(gearGeom1, wireframeMaterial);
    gearWire1.scale.setScalar(1.02);
    gear1.add(gearWire1);
    gear1.position.set(-11.0, 2.4, -2.5);
    itemsGroup.add(gear1);

    // GAMBAR 1: Roda Gigi Kecil Pasangan Bertautan - Di Atas Kiri Huruf "M" (Samping "Hi, I'm")
    const gear2 = new THREE.Mesh(gearGeom2, glassMaterial);
    const gearWire2 = new THREE.Mesh(gearGeom2, wireframeMaterial);
    gearWire2.scale.setScalar(1.02);
    gear2.add(gearWire2);
    gear2.position.set(-9.2, 4.2, -2.5);
    itemsGroup.add(gear2);

    // GAMBAR 2: Baut Mesin Baja - Tepat di Samping Kanan Tulisan "3G" (Welder 3G)
    const boltGroup = boltData.group;
    boltGroup.position.set(11.0, 2.4, -2.2);
    boltGroup.rotation.set(0.4, -0.6, 0.5);
    itemsGroup.add(boltGroup);

    // GAMBAR 2: Mur Segi Enam Atas - Di Samping Kanan Tanda Hubung "—"
    const nut1 = new THREE.Mesh(nutGeom1, glassMaterial);
    const nutWire1 = new THREE.Mesh(nutGeom1, wireframeMaterial);
    nutWire1.scale.setScalar(1.02);
    nut1.add(nutWire1);
    nut1.position.set(9.2, 4.2, -2.2);
    itemsGroup.add(nut1);

    // Mur Segi Enam Kiri Tengah - Di Luar Batas Teks Subjudul (Bebas dari kata "manufaktur")
    const nut2 = new THREE.Mesh(nutGeom2, glassMaterial);
    const nutWire2 = new THREE.Mesh(nutGeom2, wireframeMaterial);
    nutWire2.scale.setScalar(1.02);
    nut2.add(nutWire2);
    nut2.position.set(-10.5, -0.8, -1.8);
    itemsGroup.add(nut2);

    // Mur Segi Enam Kanan Tengah - Di Luar Batas Teks Subjudul (Bebas dari kata "Indonesia.")
    const nutGeom3 = createHexNutGeometry(1.1, 0.55, 0.45);
    const nut3 = new THREE.Mesh(nutGeom3, glassMaterial);
    const nutWire3 = new THREE.Mesh(nutGeom3, wireframeMaterial);
    nutWire3.scale.setScalar(1.02);
    nut3.add(nutWire3);
    nut3.position.set(10.5, -0.8, -1.8);
    itemsGroup.add(nut3);

    // Roda Gigi Presisi Tambahan (Kanan Bawah - Di Luar Kartu Komatsu)
    const gearGeom3 = createGearGeometry(12, 0.95, 1.35, 0.4, 0.32);
    const gear3 = new THREE.Mesh(gearGeom3, glassMaterial);
    const gearWire3 = new THREE.Mesh(gearGeom3, wireframeMaterial);
    gearWire3.scale.setScalar(1.02);
    gear3.add(gearWire3);
    gear3.position.set(11.2, -4.5, -2.0);
    itemsGroup.add(gear3);

    // -------------------------------------------------------------
    // 4. PARTIKEL BINTANG BERKILAU (Glowing Star Sparkles)
    // Berada lembut di latar belakang tanpa mengganggu keterbacaan teks
    // -------------------------------------------------------------
    const particleCount = 65;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 36;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const createSparkleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 1)');
      gradient.addColorStop(0.3, 'rgba(147, 197, 253, 0.85)');
      gradient.addColorStop(0.7, 'rgba(219, 234, 254, 0.25)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.95,
      map: createSparkleTexture(),
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeom, particleMaterial);
    scene.add(particles);

    // -------------------------------------------------------------
    // RESPONSIVE LAYOUT (Android & iOS + Desktop)
    // Di layar mobile: ukuran diperkecil & posisi digeser agar tetap tampak di viewport
    // -------------------------------------------------------------
    const updateResponsiveLayout = (w, h) => {
      const isMobile = w < 768;
      const isSmallMobile = w < 480;
      const aspect = w / h;
      const vHalf = 34 * Math.tan((45 * Math.PI) / 360); // ≈ 14.08
      const hHalf = vHalf * aspect;

      if (isMobile) {
        // Skala diperkecil khusus untuk Android & iOS sesuai permintaan user
        const scaleFactor = isSmallMobile ? 0.46 : 0.56;
        gear1.scale.setScalar(scaleFactor);
        gear2.scale.setScalar(scaleFactor);
        boltGroup.scale.setScalar(scaleFactor);
        nut1.scale.setScalar(scaleFactor);
        nut2.scale.setScalar(scaleFactor);
        nut3.scale.setScalar(scaleFactor);
        gear3.scale.setScalar(scaleFactor);

        // Posisi X diatur di tepi layar mobile yang terlihat (tanpa keluar viewport dan tanpa menutupi teks tengah)
        const leftEdgeX = -Math.min(hHalf * 0.78, hHalf - 0.75);
        const rightEdgeX = Math.min(hHalf * 0.78, hHalf - 0.75);

        basePos.gear1.x = leftEdgeX;
        basePos.gear1.y = 5.2;

        basePos.gear2.x = leftEdgeX + (isSmallMobile ? 0.65 : 0.85);
        basePos.gear2.y = 7.0;

        basePos.bolt.x = rightEdgeX;
        basePos.bolt.y = 5.2;

        basePos.nut1.x = rightEdgeX - (isSmallMobile ? 0.65 : 0.85);
        basePos.nut1.y = 7.0;

        basePos.nut2.x = leftEdgeX + 0.15;
        basePos.nut2.y = 0.6;

        basePos.nut3.x = rightEdgeX - 0.15;
        basePos.nut3.y = 0.6;

        basePos.gear3.x = rightEdgeX;
        basePos.gear3.y = -6.4;

        particleMaterial.size = 0.65;
      } else {
        // Desktop / Laptop: ukuran dan posisi original
        gear1.scale.setScalar(1.0);
        gear2.scale.setScalar(1.0);
        boltGroup.scale.setScalar(1.0);
        nut1.scale.setScalar(1.0);
        nut2.scale.setScalar(1.0);
        nut3.scale.setScalar(1.0);
        gear3.scale.setScalar(1.0);

        basePos.gear1.x = -11.0;
        basePos.gear1.y = 2.4;

        basePos.gear2.x = -9.2;
        basePos.gear2.y = 4.2;

        basePos.bolt.x = 11.0;
        basePos.bolt.y = 2.4;

        basePos.nut1.x = 9.2;
        basePos.nut1.y = 4.2;

        basePos.nut2.x = -10.5;
        basePos.nut2.y = -0.8;

        basePos.nut3.x = 10.5;
        basePos.nut3.y = -0.8;

        basePos.gear3.x = 11.2;
        basePos.gear3.y = -4.5;

        particleMaterial.size = 0.95;
      }

      gear1.position.x = basePos.gear1.x;
      gear2.position.x = basePos.gear2.x;
      boltGroup.position.x = basePos.bolt.x;
      nut1.position.x = basePos.nut1.x;
      nut2.position.x = basePos.nut2.x;
      nut3.position.x = basePos.nut3.x;
      gear3.position.x = basePos.gear3.x;
    };

    // Terapkan layout responsif awal
    updateResponsiveLayout(width, height);

    // -------------------------------------------------------------
    // 5. WINDOW RESIZE HANDLER (Tanpa Interaksi Mouse / Cursor Parallax)
    // Gerakan dibuat melayang mandiri ke atas-bawah tanpa goyang kiri-kanan
    // -------------------------------------------------------------
    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      if (w && h) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        updateResponsiveLayout(w, h);
      }
    };

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(currentMount);

    // -------------------------------------------------------------
    // 6. ANIMATION LOOP (Melayang Mandiri Ke Atas - Bawah Secara Halus)
    // Otomatis pause saat section tidak di viewport untuk hemat CPU & baterai
    // -------------------------------------------------------------
    let animationFrameId = null;
    let isVisible = true;
    const startTime = performance.now();

    const animate = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Partikel Bintang melayang perlahan dengan rotasi lembut
      particles.rotation.y = elapsedTime * 0.02;
      particles.position.y = Math.sin(elapsedTime * 0.4) * 0.25;

      // 1. Animasi Roda Gigi (Tepat di Samping Huruf "M" - Melayang Sinkron Bersama)
      gear1.rotation.z += 0.006;
      gear2.rotation.z -= 0.0084;
      const gearFloat = Math.sin(elapsedTime * 0.95) * 0.3;
      gear1.position.y = basePos.gear1.y + gearFloat;
      gear2.position.y = basePos.gear2.y + gearFloat;

      // 2. Animasi Baut Mesin (Tepat di Samping Tulisan "3G" - Melayang Vertikal Mandiri)
      boltGroup.rotation.x += 0.004;
      boltGroup.rotation.y += 0.006;
      boltGroup.position.y = basePos.bolt.y + Math.sin(elapsedTime * 0.95 + 1.0) * 0.3;

      // 3. Animasi Mur Segi Enam 1 (Di Samping Kanan "—")
      nut1.rotation.x += 0.005;
      nut1.rotation.y += 0.007;
      nut1.position.y = basePos.nut1.y + Math.cos(elapsedTime * 0.9 + 0.5) * 0.3;

      // 4. Animasi Mur Segi Enam 2 (Di Samping Kiri Luar Subjudul)
      nut2.rotation.x -= 0.006;
      nut2.rotation.z += 0.005;
      nut2.position.y = basePos.nut2.y + Math.sin(elapsedTime * 1.05 + 2.0) * 0.28;

      // 5. Animasi Mur Segi Enam 3 (Di Samping Kanan Luar Subjudul)
      nut3.rotation.x += 0.005;
      nut3.rotation.z -= 0.004;
      nut3.position.y = basePos.nut3.y + Math.cos(elapsedTime * 0.85 + 1.5) * 0.28;

      // 6. Animasi Roda Gigi 3 (Di Samping Kanan Kartu Komatsu)
      gear3.rotation.z += 0.005;
      gear3.position.y = basePos.gear3.y + Math.sin(elapsedTime * 1.0 + 3.0) * 0.28;

      renderer.render(scene, camera);
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationFrameId) {
        animate();
      }
    }, { threshold: 0.05 });
    visibilityObserver.observe(currentMount);

    animate();

    // Cleanup Resources
    return () => {
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      glassMaterial.dispose();
      wireframeMaterial.dispose();
      gearGeom1.dispose();
      gearGeom2.dispose();
      gearGeom3.dispose();
      nutGeom1.dispose();
      nutGeom2.dispose();
      nutGeom3.dispose();
      boltData.headGeom.dispose();
      boltData.shankGeom.dispose();
      particleGeom.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="three-hero-canvas-wrapper"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}
