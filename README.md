# Portfólio

Base para um portfólio pessoal com React, TypeScript, Vite e Tailwind CSS 4.

## Desenvolvimento

Com Node.js 24 LTS e npm instalados:

```bash
npm ci
npm run dev
```

## Comandos

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: verifica os tipos e gera a versão de produção em `dist/`.
- `npm run lint`: verifica o código com ESLint.
- `npm run preview`: permite visualizar o build de produção localmente.

## Dependências

- React e React DOM: interface e renderização.
- Tailwind CSS e `@tailwindcss/vite`: estilos utilitários integrados ao Vite.
- `lucide-react`: ícones.
- `motion`: animações, disponíveis por meio de `motion/react`.
- `clsx` e `tailwind-merge`: composição de classes condicionais e resolução de conflitos.
- TypeScript e ESLint: tipagem e análise estática.

## Estrutura inicial

- `src/App.tsx`: tela inicial do portfólio.
- `src/index.css`: importação do Tailwind e estilos globais na camada `base`.
- `src/lib/utils.ts`: função `cn()` para combinar classes.
- `vite.config.ts`: plugins de React e Tailwind.

O Tailwind 4 usa o plugin oficial do Vite e `@import 'tailwindcss'` no CSS.
Esta configuração não precisa de `tailwind.config.js` nem de um arquivo PostCSS.
Referência: [instalação oficial com Vite](https://tailwindcss.com/docs/installation/using-vite).

Exemplo de composição de classes:

```tsx
import { cn } from './lib/utils'

<div className={cn('p-4 text-zinc-100', 'p-6')} />
```

Nesse exemplo, `p-6` prevalece sobre `p-4`.
