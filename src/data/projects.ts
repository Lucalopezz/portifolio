import gestaoProjetosPublico from '../assets/gestao-projetos-publico.png'
import myfinancesBoasVindas from '../assets/myfinances-boas-vindas.png'
import myfinancesEstatisticas from '../assets/myfinances-estatisticas.png'

export type Project = {
  name: string
  category: string
  status: string
  description: string
  contribution: string
  tags: string[]
  links: { label: string; url: string }[]
  detail: string
  features?: string[]
  images?: {
    src: string
    alt: string
    label: string
    width: number
    height: number
  }[]
}

export const projects: Project[] = [
  {
    name: 'Gestão de Projetos',
    category: 'Estágio · EESC-USP',
    status: 'Uso interno · Código aberto USPdev',
    description:
      'Projetos, subprojetos, tarefas e reuniões em um só sistema para o ecossistema da EESC.',
    contribution:
      'Atuação como um dos desenvolvedores principais, implementando novos módulos e funcionalidades, com foco na interface visual.',
    tags: ['Laravel', 'MySQL'],
    links: [
      {
        label: 'Ver repositório',
        url: 'https://github.com/uspdev/gestao-projetos',
      },
    ],
    detail:
      'O sistema reúne gestão de projetos e subprojetos, tarefas, reuniões, dashboards e envio de e-mails, com organização em módulos.',
    images: [
      {
        src: gestaoProjetosPublico,
        alt: 'Página pública de Gestão de Projetos com apresentação do sistema e seus recursos',
        label: 'Página pública',
        width: 1600,
        height: 854,
      },
    ],
  },
  {
    name: 'MyFinances',
    category: 'Projeto pessoal',
    status: 'Publicado',
    description:
      'Finanças pessoais sem complicação. Uma aplicação para acompanhar entradas, gastos, despesas fixas e objetivos de compra, pensada principalmente para estudantes que moram sozinhos.',
    contribution:
      'Desenvolvimento individual do back-end e do front-end, com atenção a uma interface fácil de usar.',
    tags: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'BullMQ'],
    links: [
      {
        label: 'Acessar aplicação',
        url: 'https://my-finances-front.vercel.app/',
      },
      { label: 'API', url: 'https://github.com/Lucalopezz/MyFinances_API' },
      {
        label: 'Front-end',
        url: 'https://github.com/Lucalopezz/MyFinances_Front',
      },
    ],
    detail:
      'Trabalhar com processamento em filas foi um dos desafios do projeto. Usei BullMQ para lidar com esse fluxo.',
    features: [
      'Transações e dashboard com comparativo mensal',
      'Objetivos de compra e progresso de economia',
      'Despesas recorrentes com controle de pagamento',
      'Notificações antes do vencimento',
    ],
    images: [
      {
        src: myfinancesBoasVindas,
        alt: 'Página de boas-vindas do MyFinances com apresentação dos recursos',
        label: 'Boas-vindas',
        width: 1280,
        height: 656,
      },
      {
        src: myfinancesEstatisticas,
        alt: 'Estatísticas da conta no MyFinances com indicadores e gráficos semestrais',
        label: 'Estatísticas',
        width: 1280,
        height: 656,
      },
    ],
  },
  {
    name: 'Equivalência',
    category: 'Estágio · EESC-USP',
    status: 'Uso interno · Código aberto USPdev',
    description:
      'Informatização e padronização dos requerimentos de equivalência de disciplinas, com fluxos de aprovação que podem ser adaptados a outros tipos de requerimento.',
    contribution:
      'Durante meu estágio na STI da EESC-USP, implementei equivalências automáticas no sistema.',
    tags: ['Laravel', 'Symfony Workflow', 'uspdev/workflow', 'uspdev/forms'],
    links: [
      {
        label: 'Ver repositório',
        url: 'https://github.com/uspdev/equivalencia',
      },
    ],
    detail:
      'O projeto utiliza uspdev/workflow e uspdev/forms como base. Oferece definições de workflows armazenadas em banco, transições e estados com Symfony Workflow e representação visual dos fluxos, com integração ao Laravel 11 em diante.',
  },
  {
    name: 'API Keys',
    category: 'Estágio · EESC-USP',
    status: 'Uso interno · Código aberto USPdev',
    description:
      'Componente para gerenciar chaves de API associadas a projetos, atendendo tanto integrações de dados quanto o fornecimento de contexto para aplicações de IA.',
    contribution:
      'Criei o projeto durante meu estágio na STI da EESC-USP, no ecossistema USPdev.',
    tags: ['Chaves de API', 'Hash', 'RBAC', 'Integrações'],
    links: [
      { label: 'Ver repositório', url: 'https://github.com/uspdev/api-keys' },
    ],
    detail:
      'Centraliza a autenticação e armazena as chaves como hash, sem guardar seu valor original. Herda permissões dos projetos por papéis (RBAC), distingue os propósitos integration e ai e registra a contagem de acessos e a data do último uso.',
  },
  {
    name: 'GAM',
    category: 'Colaboração · Front-end',
    status: 'Em desenvolvimento',
    description:
      'Sistema de apoio à gestão do grupo missionário juvenil salesiano GAM, de Piracicaba.',
    contribution:
      'Criação de telas em React e organização do front-end em features. O desafio foi estruturar interfaces com muitas informações.',
    tags: ['React', 'JavaScript'],
    links: [
      {
        label: 'Ver repositório',
        url: 'https://github.com/DudsFerraz/GAM-frontend',
      },
    ],
    detail:
      'O projeto apoia a gestão de membros, eventos, oratorianos, presenças e locais. Minha contribuição está no front-end.',
  },
]
