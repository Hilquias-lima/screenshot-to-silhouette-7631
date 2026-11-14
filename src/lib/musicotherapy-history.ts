export const historySource = "https://www.musictherapy.org/history/";

export const milestones = [
  {
    id: "vescelius", year: "1903", name: "Eva Augusta Vescelius", title: "Os primeiros caminhos",
    summary: "A organização do uso terapêutico da música começa a ganhar espaço.",
    bio: "Cantora e defensora do uso terapêutico da música nos Estados Unidos, Vescelius fundou a National Society of Musical Therapeutics em 1903.",
    contribution: "Promoveu o debate, a divulgação e a organização de práticas musicais voltadas ao cuidado. Seu trabalho pertence a uma fase anterior à formação clínica padronizada; não equivale a um protocolo validado hoje.",
    impact: "Ajudou a criar espaço público para o tema e antecedeu as associações e os cursos que estruturariam a profissão.",
  },
  {
    id: "ilsen", year: "1926", name: "Isa Maud Ilsen", title: "Música nos hospitais",
    summary: "O ambiente hospitalar passa a ocupar o centro da discussão.",
    bio: "Enfermeira e musicista, Ilsen fundou a National Association for Music in Hospitals em 1926, aproximando música e assistência hospitalar.",
    contribution: "Defendeu o uso organizado da música em hospitais e a preparação de quem a oferecia. O marco é a inserção institucional, não uma comprovação de eficácia para todas as condições.",
    impact: "Reforçou a necessidade de formação e abriu caminho para uma prática integrada às equipes de cuidado.",
  },
  {
    id: "van-de-wall", year: "1936", name: "Willem van de Wall", title: "Da experiência ao método",
    summary: "Um manual reúne orientações para o trabalho musical em instituições.",
    bio: "Musicista e pioneiro do trabalho musical em instituições públicas, van de Wall publicou Music in Institutions em 1936.",
    contribution: "Sistematizou orientações para atividades musicais em serviços institucionais, contribuindo para planejar o trabalho em vez de depender apenas de apresentações ocasionais.",
    impact: "Seu manual tornou-se uma referência inicial para a organização da prática. Esses métodos históricos devem ser lidos no contexto de sua época.",
  },
  {
    id: "gaston", year: "1944 · anos 1940", name: "E. Thayer Gaston e a formação", title: "Uma profissão se estrutura",
    summary: "A formação universitária conecta música, clínica e pesquisa.",
    bio: "Educador ligado à Universidade do Kansas, Gaston foi uma figura central na organização e na educação em musicoterapia nos Estados Unidos.",
    contribution: "Promoveu formação clínica e fundamentos educacionais para a profissão. Em um marco paralelo, o primeiro programa acadêmico foi estabelecido na Michigan State University, em 1944 — não foi criado por Gaston.",
    impact: "A expansão universitária ajudou a distinguir o trabalho de um profissional qualificado das atividades musicais recreativas.",
  },
  {
    id: "namt", year: "1950", name: "National Association for Music Therapy", title: "Padrões compartilhados",
    summary: "Uma associação nacional fortalece a formação e a identidade profissional.",
    bio: "A NAMT foi fundada nos Estados Unidos em 1950, reunindo profissionais e apoiando a organização da área. É um marco institucional, não uma pessoa.",
    contribution: "Contribuiu para consolidar padrões de formação e prática e para a circulação de conhecimento profissional.",
    impact: "Fortaleceu uma identidade coletiva e a base organizacional para o desenvolvimento de pesquisa e educação.",
  },
  {
    id: "amta", year: "1998", name: "American Music Therapy Association", title: "Conhecimento em rede",
    summary: "A união de duas associações amplia a articulação da profissão.",
    bio: "A AMTA surgiu da união da NAMT com a American Association for Music Therapy, criada em 1971.",
    contribution: "Promove educação, publicações científicas e acesso a serviços qualificados. A certificação profissional norte-americana é conduzida por uma organização independente, a CBMT.",
    impact: "A união fortaleceu a representação da área nos Estados Unidos. Esta linha do tempo é um recorte norte-americano, não uma história universal da musicoterapia.",
  },
] as const;

export function timelineProgress(top: number, sectionHeight: number, viewportHeight: number) {
  const distance = sectionHeight - viewportHeight;
  return distance > 0 ? Math.min(1, Math.max(0, -top / distance)) : 0;
}