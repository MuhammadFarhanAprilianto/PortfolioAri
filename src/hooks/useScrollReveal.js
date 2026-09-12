import { useEffect } from 'react';

/**
 * useScrollReveal
 * Observes ALL elements with class "sr" inside the document.
 * When an element enters the viewport, adds "sr-visible" to trigger the reveal animation.
 * Implements the exact animation physics from LabsStdio:
 * - 950ms duration with cubic-bezier(0.16, 1, 0.3, 1)
 * - 10px blur transition
 * - Immediate above-fold check (rect.top < window.innerHeight * 0.96)
 * - RootMargin '0px 0px -30px 0px', threshold 0.05
 */
export default function useScrollReveal() {
  useEffect(() => {
    const isVisibleInContainer = (el) => {
      const scrollParent = el.closest('.timeline-scroll-wrapper, .cert-scroll-wrapper');
      if (!scrollParent) return true;
      const pRect = scrollParent.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      return rect.top < pRect.bottom - 15 && rect.bottom > pRect.top + 15;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (!isVisibleInContainer(el)) {
              return;
            }
            const delay = el.dataset.srDelay;
            if (delay) {
              el.style.transitionDelay = delay;
            }
            el.classList.add('sr-visible');
            // Unobserve after reveal so it only animates once
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    // Observe all .sr elements present in the DOM
    const observe = () => {
      document.querySelectorAll('.sr').forEach((el) => {
        if (!el.classList.contains('sr-visible')) {
          const rect = el.getBoundingClientRect();
          const inWindow = rect.top < window.innerHeight * 0.96 && rect.bottom > 0;
          const inContainer = isVisibleInContainer(el);

          if (inWindow && inContainer) {
            el.classList.add('sr-visible');
          } else {
            observer.observe(el);
          }
        }
      });
    };

    observe();

    // Re-check once after brief delay for any lazy components without continuous mutation observer
    const timer1 = setTimeout(observe, 300);
    const timer2 = setTimeout(observe, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
}

