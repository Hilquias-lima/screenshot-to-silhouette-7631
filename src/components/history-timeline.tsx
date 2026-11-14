import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { milestones, timelineProgress } from "@/lib/musicotherapy-history";

export function HistoryTimeline() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLOListElement>(null);
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!section.current || !track.current || !viewport.current) return;
      if (motion.matches || !desktop.matches) {
        track.current.style.removeProperty("transform");
        return;
      }
      const rect = section.current.getBoundingClientRect();
      const progress = timelineProgress(rect.top - 80, rect.height, window.innerHeight - 80);
      const travel = Math.max(0, track.current.scrollWidth - viewport.current.clientWidth);
      track.current.style.transform = `translateX(${-progress * travel}px)`;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    if (section.current) observer.observe(section.current);
    if (track.current) observer.observe(track.current);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    desktop.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      desktop.removeEventListener("change", schedule);
    };
  }, []);

  function move(direction: number) {
    if (!section.current || !viewport.current || !track.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 768) {
      viewport.current.scrollBy({ left: direction * viewport.current.clientWidth * 0.85, behavior: reduced ? "instant" : "smooth" });
    } else {
      const rect = section.current.getBoundingClientRect();
      const start = window.scrollY + rect.top - 80;
      const distance = rect.height - (window.innerHeight - 80);
      const next = Math.min(start + distance, Math.max(start, window.scrollY + direction * distance / (milestones.length - 1)));
      window.scrollTo({ top: next, behavior: "smooth" });
    }
  }

  return (
    <section ref={section} id="historia" className="history-scroll border-y border-border bg-secondary" aria-labelledby="history-heading">
      <div className="history-sticky">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-5 pb-8">
          <div><p className="font-hand text-2xl text-ocean">Uma história de escuta</p><h2 id="history-heading" className="mt-2 text-3xl font-semibold text-deep md:text-4xl">Pioneiros do cuidado musical.</h2><p className="mt-3 max-w-xl text-sm text-muted-foreground">Um recorte da construção da profissão nos Estados Unidos, de 1903 a 1998.</p></div>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="icon" className="min-h-11 min-w-11" onClick={() => move(-1)} aria-label="Voltar na linha do tempo" title="Voltar na linha do tempo"><ArrowLeft aria-hidden="true" /></Button>
            <Button variant="outline" size="icon" className="min-h-11 min-w-11" onClick={() => move(1)} aria-label="Avançar na linha do tempo" title="Avançar na linha do tempo"><ArrowRight aria-hidden="true" /></Button>
          </div>
        </div>
        <div ref={viewport} className="history-viewport" tabIndex={0} role="region" aria-label="Marcos históricos" onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
          <ol ref={track} className="history-track" onFocusCapture={(event) => {
            if (!section.current || !viewport.current) return;
            const item = (event.target as HTMLElement).closest("li");
            if (!item) return;
            const index = Array.from(event.currentTarget.children).indexOf(item);
            if (index < 0) return;
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduced || window.innerWidth < 768) {
              viewport.current.scrollTo({ left: item.offsetLeft - 20, behavior: "instant" });
            } else {
              const rect = section.current.getBoundingClientRect();
              const start = window.scrollY + rect.top - 80;
              const distance = rect.height - (window.innerHeight - 80);
              window.scrollTo({ top: start + distance * index / (milestones.length - 1), behavior: "instant" });
            }
          }}>
            {milestones.map((item, index) => <li key={item.id} className="history-item">
              <div className="flex items-center gap-4 text-ocean"><span className="text-sm font-semibold">0{index + 1}</span><span className="h-px flex-1 bg-border" aria-hidden="true" /><Music className="h-5 w-5" aria-hidden="true" /></div>
              <p className="mt-6 font-hand text-4xl text-ocean">{item.year}</p>
              <h3 className="mt-3 text-2xl font-semibold text-deep">{item.title}</h3>
              <p className="mt-3 text-sm font-semibold text-foreground">{item.name}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              <Button asChild variant="link" className="mt-5 h-auto justify-start whitespace-normal px-0 text-primary"><a href={`#detalhe-${item.id}`}>Conheça este marco<ArrowUpRight aria-hidden="true" /></a></Button>
            </li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}