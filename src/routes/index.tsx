import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, MessageCircle, Sparkles, Stethoscope, MapPin, Play, Pause, Menu, X, Search, Music } from "lucide-react";
import hero from "@/assets/hero.jpg";
import session from "@/assets/session.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ondas de Cuidados — Musicoterapia e bem-estar" },
      { name: "description", content: "Conheça a musicoterapia, seus benefícios e como encontrar atendimento perto de você." },
      { property: "og:title", content: "Ondas de Cuidados — Musicoterapia e bem-estar" },
      { property: "og:description", content: "Informação, música e cuidado para todos." },
    ],
  }),
  component: Index,
});

const nav = [
  ["Início", "#inicio"],
  ["Benefícios", "#beneficios"],
  ["Localização", "#localizacao"],
  ["Notícias", "#noticias"],
  ["Músicas", "#musicas"],
];

const btn = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const btnPrimary = `${btn} bg-primary text-primary-foreground shadow-soft hover:bg-ocean`;
const btnOutline = `${btn} border-2 border-primary text-primary hover:bg-accent`;

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2 text-deep">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
        <circle cx="20" cy="20" r="19" className="fill-accent" />
        <path d="M6 20c3-6 5-6 7 0s4 6 7 0 4-6 7 0 4 6 7 0" className="stroke-deep" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-lg font-semibold leading-none">Ondas de <span className="font-hand text-2xl text-ocean">Cuidados</span></span>
    </a>
  );
}

function Wave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`block h-12 w-full ${className}`} aria-hidden>
      <path d="M0 40c240-40 480-40 720 0s480 40 720 0v40H0z" fill="currentColor" />
    </svg>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-sm font-medium text-muted-foreground hover:text-deep">{l}</a>
            ))}
            <a href="#musicoterapia" className={btnPrimary}>Conheça a musicoterapia</a>
          </nav>
          <button className="lg:hidden text-deep" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-3 border-t border-border px-5 py-4 lg:hidden" aria-label="Menu móvel">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-1 text-deep">{l}</a>
            ))}
            <a href="#musicoterapia" onClick={() => setOpen(false)} className={btnPrimary}>Conheça a musicoterapia</a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-hand text-3xl text-ocean">sinta, escute, cuide-se</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-deep md:text-5xl lg:text-6xl">
              Encontre equilíbrio e bem-estar através da música.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              A musicoterapia utiliza a música e seus elementos como parte de um processo terapêutico, promovendo experiências de expressão, comunicação e cuidado para diferentes pessoas e necessidades.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#beneficios" className={btnPrimary}>Descubra os benefícios</a>
              <a href="#localizacao" className={btnOutline}>Encontre um centro</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-beige/40 blur-2xl" />
            <img src={hero} alt="Ilustração de uma pessoa ouvindo música com fones, cercada por ondas sonoras suaves" width={1024} height={1024} className="w-full rounded-[2.5rem]" />
          </div>
        </div>
        <Wave className="text-secondary" />
      </section>

      {/* O que é */}
      <section id="musicoterapia" className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <img src={session} alt="Ilustração de uma sessão de musicoterapia com violão e tambor" loading="lazy" width={1024} height={1024} className="order-2 w-full rounded-[2rem] shadow-soft md:order-1" />
          <div className="order-1 md:order-2">
            <p className="font-hand text-2xl text-ocean">O que é musicoterapia?</p>
            <h2 className="mt-1 text-3xl font-semibold text-deep md:text-4xl">Muito além de ouvir música.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A musicoterapia é uma prática terapêutica que utiliza a música e seus elementos em processos conduzidos por profissionais qualificados. Por meio de experiências musicais, pode favorecer a expressão, a comunicação, a interação e o bem-estar, conforme as necessidades e os objetivos de cada pessoa.
            </p>
            <a href="#musicoterapia" className="mt-6 inline-block font-semibold text-ocean underline-offset-4 hover:underline">Saiba mais sobre a musicoterapia →</a>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="mx-auto max-w-6xl px-5 py-20 text-center">
        <p className="font-hand text-2xl text-ocean">Benefícios</p>
        <h2 className="mt-1 text-3xl font-semibold text-deep md:text-4xl">A música pode fazer parte do cuidado.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Heart, "Expressão emocional", "Pode oferecer caminhos para expressar sentimentos e experiências.", "bg-accent"],
            [MessageCircle, "Comunicação e interação", "Pode favorecer formas de comunicação e participação.", "bg-secondary"],
            [Sparkles, "Bem-estar e acolhimento", "Pode proporcionar experiências significativas de conforto e envolvimento.", "bg-accent"],
            [Stethoscope, "Acompanhamento terapêutico", "Pode integrar planos de cuidado conduzidos por profissionais qualificados.", "bg-secondary"],
          ].map(([Icon, t, d, bg]: any) => (
            <article key={t} className={`${bg} rounded-3xl p-7 text-left shadow-soft transition-transform hover:-translate-y-1`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-ocean"><Icon className="h-6 w-6" aria-hidden /></div>
              <h3 className="mt-5 text-lg font-semibold text-deep">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
        <a href="#beneficios" className={`${btnOutline} mt-10`}>Explorar os benefícios</a>
      </section>

      {/* Localização */}
      <section id="localizacao" className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2.5rem] bg-primary p-8 text-primary-foreground md:grid-cols-[1.3fr_1fr] md:p-14">
          <div>
            <p className="font-hand text-2xl text-sky">Localização</p>
            <h2 className="mt-1 text-3xl font-semibold md:text-4xl">O cuidado pode estar mais perto do que você imagina.</h2>
            <p className="mt-4 text-primary-foreground/80">Conheça centros e serviços de musicoterapia e descubra possibilidades de atendimento na sua região.</p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="cidade" className="sr-only">Cidade ou endereço</label>
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ocean" aria-hidden />
                <input id="cidade" placeholder="Digite sua cidade ou endereço" className="w-full rounded-full bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky" />
              </div>
              <button type="submit" className={`${btn} bg-beige text-deep hover:bg-card`}><Search className="h-4 w-4" aria-hidden />Buscar locais</button>
            </form>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-xs" aria-hidden>
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <circle cx="100" cy="100" r="90" className="fill-ocean/40" />
              <path d="M20 80 Q60 60 100 90 T180 70 M30 130 Q80 110 120 140 T190 120 M70 20 Q80 100 60 180 M140 25 Q120 100 150 180" className="stroke-sky" strokeWidth="2" fill="none" opacity=".6" />
              <circle cx="100" cy="100" r="30" className="fill-sky/30" />
            </svg>
            <MapPin className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-[70%] fill-beige text-deep" />
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section id="noticias" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="font-hand text-2xl text-ocean">Notícias e novidades</p>
            <h2 className="mt-1 text-3xl font-semibold text-deep md:text-4xl">Conhecimento que aproxima.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Pesquisa", "Pesquisas e novidades sobre musicoterapia", "Espaço reservado para apresentar conteúdos sobre estudos e atualizações da área."],
              ["Contextos", "Aplicações da musicoterapia em diferentes contextos", "Espaço reservado para explicar como a prática pode estar presente em diversos ambientes de cuidado."],
              ["Cotidiano", "Música, bem-estar e saúde mental no dia a dia", "Espaço reservado para reflexões sobre a presença da música na rotina."],
            ].map(([c, t, d], i) => (
              <article key={t} className="overflow-hidden rounded-3xl bg-card shadow-soft">
                <div className={`flex h-40 items-center justify-center ${i % 2 ? "bg-beige" : "bg-accent"}`}>
                  <Music className="h-10 w-10 text-ocean" aria-hidden />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                    <span className="text-ocean">{c}</span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-muted-foreground">Exemplo</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-deep">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  <a href="#noticias" className="mt-4 inline-block text-sm font-semibold text-ocean hover:underline">Ler mais →</a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><a href="#noticias" className={btnPrimary}>Ver todas as notícias</a></div>
        </div>
      </section>

      {/* Respirar */}
      <section id="musicas" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <p className="font-hand text-3xl text-ocean">um momento para respirar</p>
          <h2 className="mt-1 text-3xl font-semibold text-deep md:text-5xl">Respire. Desacelere. Escute.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Reserve alguns minutos para fazer uma pausa, ouvir uma música tranquila e prestar atenção ao momento presente.</p>
          <p className="mt-4 text-sm italic text-muted-foreground">Esta é uma sugestão de pausa e não substitui uma sessão com profissional de musicoterapia.</p>
        </div>
        <div className="rounded-[2.5rem] bg-accent p-8 shadow-soft">
          <div className="flex h-32 items-end justify-center gap-1.5" aria-hidden>
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className={`w-1.5 rounded-full bg-ocean/70 ${playing ? "animate-pulse" : ""}`} style={{ height: `${25 + Math.abs(Math.sin(i * 0.6)) * 75}%`, animationDelay: `${i * 60}ms` }} />
            ))}
          </div>
          <div className="mt-8 flex items-center gap-5 rounded-3xl bg-card p-5">
            <button onClick={() => setPlaying(!playing)} aria-label={playing ? "Pausar" : "Reproduzir"} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-ocean">
              {playing ? <Pause /> : <Play className="ml-1" />}
            </button>
            <div>
              <p className="font-hand text-xl text-ocean">sugestão musical</p>
              <p className="font-semibold text-deep">Espaço para uma música tranquila</p>
              <p className="text-sm text-muted-foreground">Artista · duração</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-deep text-primary-foreground">
        <Wave className="-mt-px rotate-180 text-background" />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">Ondas de <span className="font-hand text-2xl text-sky">Cuidados</span></p>
            <p className="mt-3 text-primary-foreground/80">Informação, música e cuidado para todos.</p>
          </div>
          <nav aria-label="Rodapé">
            <p className="font-semibold">Navegue</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
              {nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-sky">{l}</a></li>)}
            </ul>
          </nav>
          <div className="text-sm text-primary-foreground/80">
            <p className="font-semibold text-primary-foreground">Sobre o projeto</p>
            <p className="mt-3">Projeto acadêmico de Front-end com finalidade educativa e informativa. Não substitui orientação de profissionais qualificados.</p>
          </div>
        </div>
        <p className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">© 2026 Ondas de Cuidados · Projeto acadêmico</p>
      </footer>
    </div>
  );
}
