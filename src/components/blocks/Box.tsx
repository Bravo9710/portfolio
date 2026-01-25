"use client";

import { cn } from "@/lib";
import { useRef, useEffect } from "react";

export default function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
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
      className={cn(
        "group relative overflow-hidden  rounded-[20px] bg-background-tertiary p-[2px]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-[var(--y)] left-[var(--x)] w-[150%] h-[150%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, #FF494A, transparent 50%)",
        }}
      ></div>
      <div className="relative z-10 rounded-[18px] bg-background-tertiary ">
        {children}
      </div>
    </div>
  );
}
