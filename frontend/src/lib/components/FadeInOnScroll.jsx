"use client"; // If this is a Client Component in App Router
import React from "react";
import useIntersectionObserver from "../useIntersectionObserver";

export function FadeInOnScrollX({
  children,
  delay = 0,
  threshold = 0.1,
  position = "5rem",
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: threshold });

  const customStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : `translateX(${position})`,
    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
    visibility: isVisible ? "visible" : "hidden",
  };

  return (
    <div ref={ref} style={customStyle}>
      {children}
    </div>
  );
}
export function FadeInOnScrollY({
  children,
  delay = 0,
  threshold = 0.1,
  position = "5rem",
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: threshold });

  const customStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : `translateY(${position})`,
    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
    visibility: isVisible ? "visible" : "hidden",
  };

  return (
    <div ref={ref} style={customStyle}>
      {children}
    </div>
  );
}
