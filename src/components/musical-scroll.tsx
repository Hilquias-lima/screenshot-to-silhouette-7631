import { useEffect, useRef } from "react";

export function MusicalScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 1;
      ref.current?.style.setProperty("--unrevealed", `${media.matches ? 0 : (1 - progress) * 88}%`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="musical-scroll" aria-hidden="true">
      <svg viewBox="0 0 1000 1400" preserveAspectRatio="xMidYMid slice" focusable="false">
        <g className="musical-waves" fill="none" stroke="currentColor" strokeWidth="1.5">
          {[0, 18, 36, 54, 72].map((offset) => (
            <path key={offset} transform={`translate(${offset} 0)`} d="M110 -80 C490 100 80 240 290 370 S820 500 560 690 S110 890 410 1030 S850 1220 610 1480" />
          ))}
          {[0, 16, 32].map((offset) => (
            <path key={offset} transform={`translate(${-offset} 0)`} d="M940 -70 C630 170 1040 290 820 470 S260 590 470 810 S1000 980 820 1190 S260 1300 380 1490" />
          ))}
        </g>
        <g className="musical-notes" fill="currentColor">
          {[[190, 180, -12], [780, 350, 15], [310, 630, -18], [850, 920, 12], [230, 1170, -10], [640, 1350, 18]].map(([x, y, rotation]) => (
            <g key={y} transform={`translate(${x} ${y}) rotate(${rotation})`}>
              <ellipse cx="0" cy="0" rx="10" ry="7" transform="rotate(-25)" />
              <path d="M7 0v-45h3c5 10 13 12 14 23-6-7-11-7-14-9V0z" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}