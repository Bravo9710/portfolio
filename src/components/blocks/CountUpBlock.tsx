"use client";

import { useRef, useEffect } from "react";
import CountUp from "./CountUp";

export default function CountUpBlock({
  countFrom,
  count,
  plus = false,
  text,
}: {
  countFrom?: number;
  count: number;
  plus?: boolean;
  text: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateMousePosition = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty("--x", `${x}px`);
      container.style.setProperty("--y", `${y}px`);
    };

    container.addEventListener("mousemove", updateMousePosition);
    return () => {
      container.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative overflow-hidden rounded-[20px] bg-[#141414] p-[2px]"
    >
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-[var(--y)] left-[var(--x)] w-[150%] h-[150%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, #FF494A, transparent 50%)",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center rounded-[18px] bg-[#141414] py-8 text-center w-full h-full">
        <div className="text-5xl font-bold text-white mb-2 flex items-center gap-1">
          <CountUp
            from={countFrom ?? 0}
            to={count}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text"
          />
          {plus && <span>+</span>}
        </div>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}
