import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const INTERACTIVE = 'a, button, [role="button"], [role="link"], input, label, [tabindex]';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;

    let tx = -100, ty = -100;
    let rx = -100, ry = -100;
    let targetScale = 1, currentScale = 1;
    let visible = false;

    const onMouseMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        rx = tx; ry = ty;
        dot.style.opacity  = "1";
        ring.style.opacity = "1";
        visible = true;
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity  = "0";
      ring.style.opacity = "0";
      visible = false;
    };

    const onEnter = () => { targetScale = 1.7; };
    const onLeave = () => { targetScale = 1; };

    document.addEventListener("mousemove",  onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const bindInteractive = () => {
      document.querySelectorAll(INTERACTIVE).forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    bindInteractive();

    // Re-bind after potential DOM changes (React re-renders)
    const observer = new MutationObserver(bindInteractive);
    observer.observe(document.body, { childList: true, subtree: true });

    let raf;
    const loop = () => {
      dot.style.transform = `translate(${tx}px, ${ty}px)`;

      rx += (tx - rx) * 0.13;
      ry += (ty - ry) * 0.13;
      currentScale += (targetScale - currentScale) * 0.1;

      ring.style.transform = `translate(${rx}px, ${ry}px) scale(${currentScale})`;

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove",  onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="c-dot"  aria-hidden="true" />
      <div ref={ringRef} className="c-ring" aria-hidden="true" />
    </>
  );
}
