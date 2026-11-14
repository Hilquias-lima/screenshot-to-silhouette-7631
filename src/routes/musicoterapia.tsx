import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowDown, ArrowUpRight, Brain, HeartPulse, Activity, Quote, Sun, Moon, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HistoryTimeline } from "@/components/history-timeline";
import { useTheme } from "@/hooks/use-theme";
import { milestones, historySource } from "@/lib/musicotherapy-history";
import session from "@/assets/session.jpg";

export const Route = createFileRoute("/musicoterapia")({
  head: () => ({ meta: [
    { title: "Conheça a Musicoterapia — História e ciência | Ondas de Cuidados" },
    { name: "description", content: "Explore os pioneiros da musicoterapia, experiências ilustrativas e evidências sobre estresse, dor e demência, com fontes e limites clínicos." },
    { property: "og:title", content: "Conheça a Musicoterapia | Ondas de Cuidados" },
    { property: "og:description", content: "Uma jornada pela história, pelas pessoas e pela ciência do cuidado musical." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: MusicotherapyPage,
});

const evidence = [
  { icon: Activity, label: "Estresse e cortisol", number: "18", unit: "estudos na revisão", detail: "1.301 participantes · contexto cirúrgico", title: "Uma resposta de estresse menor", text: "Uma revisão encontrou atenuação da resposta de cortisol com música no período cirúrgico. O resultado combinado veio de 8 estudos: diferença média padronizada −0,30 (IC 95%: −0,53 a −0,07).", limit: "É um efeito padronizado, não uma redução de 30%. Os resultados não podem ser generalizados a todas as pessoas ou a toda sessão de musicoterapia.", source: "Meta-análise sobre estresse cirúrgico, 2019", url: "https://pubmed.ncbi.nlm.nih.gov/31326711/", type: "cortisol" },
  { icon: Brain, label: "Demência e Alzheimer", number: "30", unit: "estudos analisados", detail: "1.720 participantes · Cochrane, 2025", title: "Cuidar do humor e da conexão", text: "Intervenções terapêuticas baseadas em música provavelmente melhoram sintomas depressivos ao fim do tratamento em pessoas com demência. Podem também melhorar problemas comportamentais globais.", limit: "Neuroplasticidade é um mecanismo de interesse, não uma comprovação de reversão do Alzheimer. Esta revisão não demonstrou melhora clara da cognição; benefícios duradouros permanecem incertos.", source: "Revisão Cochrane sobre demência, 2025", url: "https://www.cochrane.org/about-us/news/music-based-therapy-may-improve-depressive-symptoms-people-dementia", type: "brain" },
  { icon: HeartPulse, label: "Dor e resposta corporal", number: "2015", unit: "revisão no The Lancet", detail: "Música no cuidado perioperatório", title: "Mais conforto durante o cuidado", text: "Uma revisão de estudos cirúrgicos encontrou menor dor, ansiedade e uso de analgésicos com intervenções musicais. São recursos complementares ao cuidado, não substitutos do tratamento.", limit: "Frequência cardíaca é uma medida fisiológica estudada, mas depende do contexto, do ritmo e da pessoa. Não há promessa de normalizar o coração, e ouvir música não equivale necessariamente à musicoterapia clínica.", source: "Hole e colaboradores · The Lancet, 2015", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2815%2960169-6/fulltext", type: "heart" },
];

function EvidenceGraphic({ type }: { type: string }) {
  return <div className="evidence-graphic" aria-hidden="true">
    <svg viewBox="0 0 320 88" fill="none" focusable="false">
      {type === "cortisol" ? <><path className="graphic-guide" d="M8 18H312M8 45H312M8 72H312" /><path className="graphic-line" d="M8 19C45 15 47 36 78 31S121 33 152 49S210 47 246 62S279 63 312 70" /></> : type === "brain" ? <><path className="graphic-line" d="M40 44L100 18L160 44L220 18L280 44M40 44L100 70L160 44L220 70L280 44M100 18V70M220 18V70" />{[[40,44],[100,18],[100,70],[160,44],[220,18],[220,70],[280,44]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="6" className="graphic-node" />)}</> : <path className="graphic-line" d="M8 44H63L78 31L91 61L111 13L134 77L150 44H193L208 31L222 61L240 17L258 66L272 44H312" />}
    </svg>
  </div>;
}

function MusicotherapyPage() {
  const { theme, toggleTheme } = useTheme();
  return <div className="knowledge-page bg-background text-foreground">
    <a href="#conteudo-musicoterapia" className="skip-link">Pular para o conteúdo principal</a>
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-deep"><Music className="h-6 w-6 text-ocean" aria-hidden="true" /><span>Ondas de <span className="font-hand text-2xl">Cuidados</span></span></Link>
        <div className="flex items-center gap-2"><Button asChild variant="ghost" className="min-h-11 px-3"><Link to="/"><ArrowLeft aria-hidden="true" /><span className="hidden sm:inline">Página inicial</span><span className="sm:hidden">Início</span></Link></Button><Button variant="ghost" size="icon" className="min-h-11 min-w-11" onClick={toggleTheme} aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"} title={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}>{theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</Button></div>
      </div>
    </header>
    <section id="conteudo-musicoterapia" tabIndex={-1} className="knowledge-cover relative isolate" aria-labelledby="page-title">
      <img src={session} alt="Ilustração de uma sessão de musicoterapia com instrumentos e participação conjunta" width={1024} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="knowledge-cover-shade absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="font-hand text-3xl">Música, vínculo e cuidado</p>
        <h1 id="page-title" className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">Conheça a Musicoterapia</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">Muito além de ouvir: uma prática profissional que transforma experiências musicais em caminhos de expressão, comunicação e cuidado.</p>
        <Button asChild className="mt-8 h-auto min-h-11 whitespace-normal px-6 py-3"><a href="#historia">Explore esta história<ArrowDown aria-hidden="true" /></a></Button>
      </div>
    </section>
    <nav className="border-b border-border" aria-label="Nesta página"><div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-5 py-5">{[["História", "historia"], ["Pioneiros", "pioneiros"], ["Experiências", "relatos"], ["Evidências", "evidencias"]].map(([label,id]) => <a key={id} href={`#${id}`} className="py-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">{label}</a>)}</div></nav>
    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1fr_1.4fr]">
      <h2 className="text-3xl font-semibold leading-snug text-deep">A música é o meio.<br /><span className="font-hand text-4xl text-ocean">A pessoa é o centro.</span></h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed"><p>Na musicoterapia, um profissional qualificado define objetivos, acompanha respostas e adapta experiências musicais às necessidades de cada pessoa. Cantar, improvisar, tocar e escutar podem fazer parte desse processo.</p><p>Uma playlist pode acolher um momento. Uma sessão de musicoterapia envolve também vínculo terapêutico, avaliação e acompanhamento. Os resultados variam; a prática não oferece cura nem substitui orientação clínica.</p></div>
    </section>
    <HistoryTimeline />
    <section id="pioneiros" className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="pioneers-heading">
      <p className="font-hand text-2xl text-ocean">Por trás de cada marco</p><h2 id="pioneers-heading" className="mt-2 text-3xl font-semibold text-deep md:text-4xl">Pessoas, práticas e legado.</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">Da defesa inicial da música no cuidado à formação profissional: contribuições históricas, lidas com os limites de cada época.</p>
      <div className="mt-12">{milestones.map((item,index) => <article id={`detalhe-${item.id}`} key={item.id} className="pioneer-detail grid gap-6 border-t border-border py-10 md:grid-cols-[0.8fr_1.4fr]">
        <div><p className="font-hand text-3xl text-ocean">{item.year}</p><h3 className="mt-3 text-2xl font-semibold text-deep">{item.name}</h3><span className="mt-4 inline-block text-sm text-muted-foreground">Marco 0{index + 1} / 06</span></div>
        <dl className="space-y-5 text-sm leading-relaxed"><div><dt className="font-semibold text-foreground">Trajetória</dt><dd className="mt-1 text-muted-foreground">{item.bio}</dd></div><div><dt className="font-semibold text-foreground">Contribuição para a prática</dt><dd className="mt-1 text-muted-foreground">{item.contribution}</dd></div><div><dt className="font-semibold text-foreground">Impacto histórico</dt><dd className="mt-1 text-muted-foreground">{item.impact}</dd></div></dl>
      </article>)}</div>
      <a href={historySource} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4">Fonte: arquivos históricos da AMTA <ArrowUpRight className="h-4 w-4" aria-hidden="true" /><span className="sr-only">(abre em nova aba)</span></a>
    </section>
    <section id="relatos" className="bg-secondary py-20" aria-labelledby="stories-heading"><div className="mx-auto max-w-6xl px-5">
      <p className="font-hand text-2xl text-ocean">O cuidado no cotidiano</p><h2 id="stories-heading" className="mt-2 text-3xl font-semibold text-deep md:text-4xl">Experiências que aproximam.</h2><p className="mt-4 max-w-2xl text-muted-foreground">Relatos simulados para fins educativos. Nomes e histórias são fictícios; não representam pacientes reais nem comprovam resultados clínicos.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{[
        { name: "Marina", role: "Pessoa em acompanhamento", initials: "M", quote: "Às vezes eu não encontrava palavras para o que sentia. Improvisar alguns sons com a terapeuta me ajudou a começar uma conversa sobre esses sentimentos." },
        { name: "Carlos", role: "Familiar", initials: "C", quote: "Nas sessões com meu pai, uma canção conhecida criava oportunidades de estarmos juntos. Aprendi a valorizar esses momentos, sem esperar que a música recuperasse a memória dele." },
        { name: "Luiza", role: "Estudante", initials: "L", quote: "Durante a formação, entendi que a sessão não é uma apresentação. Escutar as escolhas da pessoa e adaptar a experiência faz tanta diferença quanto saber tocar." },
      ].map(story => <article key={story.name} className="flex flex-col rounded-lg border border-border bg-card p-7"><Quote className="h-7 w-7 text-ocean" aria-hidden="true" /><blockquote className="mt-5 flex-1 text-base leading-relaxed text-card-foreground">“{story.quote}”</blockquote><div className="mt-8 flex items-center gap-3"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent font-hand text-2xl text-deep" aria-hidden="true">{story.initials}</span><div><p className="font-semibold text-card-foreground">{story.name}</p><p className="text-xs text-muted-foreground">{story.role} · Relato simulado</p></div></div></article>)}</div>
    </div></section>
    <section id="evidencias" className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="science-heading"><p className="font-hand text-2xl text-ocean">O que a ciência nos conta</p><h2 id="science-heading" className="mt-2 text-3xl font-semibold text-deep md:text-4xl">Evidências, não promessas.</h2><p className="mt-4 max-w-2xl text-muted-foreground">Estudos ajudam a compreender possibilidades e limites. As pesquisas abaixo usam intervenções diferentes; nem todas são sessões clínicas de musicoterapia.</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">{evidence.map(item => <article key={item.type} className="flex flex-col rounded-lg border border-border bg-card p-7"><div className="flex items-center gap-3 text-primary"><item.icon className="h-6 w-6" aria-hidden="true" /><h3 className="text-sm font-semibold">{item.label}</h3></div><p className="mt-7 text-5xl font-semibold text-deep">{item.number}</p><p className="mt-2 text-sm font-semibold">{item.unit}</p><p className="mt-1 text-xs text-muted-foreground">{item.detail}</p><EvidenceGraphic type={item.type} /><p className="text-xs text-muted-foreground">Ilustração conceitual · não representa dados medidos</p><h4 className="mt-6 text-xl font-semibold text-deep">{item.title}</h4><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p><div className="mt-5 border-l-2 border-ocean pl-4 text-sm leading-relaxed"><p className="font-semibold">O que isso não significa</p><p className="mt-2 text-muted-foreground">{item.limit}</p></div><a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-start gap-2 pt-6 text-sm font-semibold text-primary underline underline-offset-4">{item.source}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /><span className="sr-only">(abre em nova aba)</span></a></article>)}</div>
      <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">Informação educativa, não recomendação individual de tratamento. Decisões de cuidado devem ser discutidas com profissionais qualificados. Resultados de grupos não garantem o mesmo benefício para cada pessoa.</p>
    </section>
    <footer className="border-t border-border bg-secondary"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8"><p className="text-sm text-muted-foreground">© 2026 Ondas de Cuidados · Projeto acadêmico</p><Button asChild variant="outline" className="min-h-11"><Link to="/"><ArrowLeft aria-hidden="true" />Voltar ao início</Link></Button></div></footer>
  </div>;
}