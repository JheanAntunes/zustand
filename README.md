# Introdução :bear:
Por que você estudou zustand ?
Porque é uma biblioteca que fornece o gerenciamento de estado global, eu também em breve vou estudar outras bibliotecas que gerencia o estado globalmente :snail:
## O que praticou :polar_bear:
- criação de loja
- Atualização da loja
- Zustand com Components server
  - server actions
- Pattern
  - Slices pattern
- Praticas recomendas
  - Loja única
  - Utilizar a função set ou setState para atualizar a loja
- Objeto aninhados
  - Com immer
- Criação de methods para atualizar a loja
- Seletores de geração automática
  - CreateSelectors
- Redux-like pattern
- ContextApi com zustand

# Projeto com Zustand :bear:
## Descrição :dove:
projeto que mostra os e-mails e você pode pesquisar pelo email, enviar para lixeira, arquivar.
## Projeto  :bear:
eu copiei o exemplo do component e-mails do shadcn-ui que gerencia o estado global com jotai e refatorei para zustand e criei novas funções que são
- Deletar e-mail
- Arquivar e-mail
- Pesquisar pelo e-mail ou nome

para construir essas novas funções, utilizei hooks personalizados, reutlização, debounce, manipulação de url, hooks do nextjs, zod, react-hook-form e mais...
## Contruibuição :paw_prints:
Shadcn-ui components e outras tecnologias incríveis que usei para fazer esse projeto.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
