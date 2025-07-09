import React, { useState, useEffect, useRef } from "react";

const Typewriter = ({ text = "", speed = 50 }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const elementRef = useRef(null);

  // Detect when in view using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Accurate typewriter effect
  useEffect(() => {
    if (!startTyping || index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [startTyping, index, text, speed]);

  return (
    <span ref={elementRef} className="font-mono whitespace-pre-wrap">
      {displayed}
      {startTyping && index < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default Typewriter;
