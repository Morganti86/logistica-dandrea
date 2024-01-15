"use client";
import "./MouseFollower.css";

import { useRef, useEffect } from "react";

export default function MouseFollower() {
  const mouseRef = useRef(null);

  const updateMousePosition = (e) => {
    const mouse = mouseRef.current;
    // ball.style.left = `${e.pageX}px`;
    // ball.style.top = `${e.pageY}px`;
    mouse.style.left = `${e.clientX}px`;
    mouse.style.top = `${e.clientY}px`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // return mousePosition;
  return (
    <div ref={mouseRef} className="mouse">
      <img
        src="/Icons/van.webp"
        width={35}
        height={20}
        alt="Camión Image"
        // priority={true}
      />
    </div>
  );
}
