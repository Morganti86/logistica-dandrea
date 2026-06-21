"use client";
import "./MouseFollower.css";
import { useRef, useEffect } from "react";

export default function MouseFollower() {
  const mouseRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId;
    const updateMousePosition = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (mouseRef.current) {
          mouseRef.current.style.left = `${e.clientX}px`;
          mouseRef.current.style.top = `${e.clientY}px`;
        }
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={mouseRef} className="mouse">
      <img
        src="/Icons/van.webp"
        width={35}
        height={20}
        alt=""
      />
    </div>
  );
}
