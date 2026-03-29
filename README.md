# Next.js Fundamentals

<p align="center">
  Projeto de estudo com foco em fundamentos modernos do ecossistema Next.js,
  explorando renderização no servidor, App Router, componentes assíncronos e carregamento com Suspense.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
</p>

## Sobre o projeto

Este repositório documenta minha jornada prática com Next.js por meio de uma aplicação simples, mas muito útil para consolidar conceitos essenciais da stack moderna do React.

A proposta é exercitar fundamentos que aparecem com frequência em projetos reais, como:

- organização com `App Router`
- componentes assíncronos no servidor
- uso de `Suspense` para estados de carregamento
- consumo de API externa com `fetch`
- separação de responsabilidades entre componentes

## O que está sendo praticado

- `Server Components`
- `Suspense`
- `loading.tsx`
- chamadas assíncronas com `fetch`
- composição de componentes
- estrutura base com TypeScript

## Funcionalidades atuais

- página inicial renderizada com App Router
- componente assíncrono para buscar dados do perfil do GitHub
- componente de carregamento simulado para demonstrar comportamento assíncrono
- uso de fallbacks independentes com `Suspense`

## Tecnologias

| Tecnologia | Finalidade |
| --- | --- |
| Next.js 16 | Framework principal da aplicação |
| React 19 | Biblioteca para construção da interface |
| TypeScript 5 | Tipagem estática e melhor manutenção do código |
| Tailwind CSS 4 | Estilização da aplicação |
| ESLint | Padronização e qualidade de código |
| pnpm | Gerenciamento de dependências |

## Estrutura do projeto

```bash
next13-fundamentals/
├── app/
│   ├── layout.tsx
│   ├── loading.tsx
│   └── page.tsx
├── componentes/
│   ├── github-profile.tsx
│   └── loadingcompany.tsx
└── README.md
```

## Como executar localmente

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/next13-fundamentals
pnpm install
pnpm dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Scripts disponíveis

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Aprendizados reforçados neste projeto

- diferença entre carregamento global e carregamento por trecho da interface
- como componentes server-side podem buscar dados diretamente
- como usar `Suspense` para melhorar a experiência de carregamento
- como estruturar um projeto Next.js de forma simples e evolutiva

## Próximos passos

- melhorar a interface da página inicial
- tratar estados de erro na requisição ao GitHub
- transformar a visualização do perfil em um card mais amigável
- adicionar mais exemplos práticos de rotas e renderização
- publicar o projeto na Vercel

## Autor

**Diovan Baptista**

- GitHub: [@diovanBaptista](https://github.com/diovanBaptista)

---

Se quiser, no próximo passo eu também posso deixar esse README com um visual ainda mais forte para portfólio, incluindo banner, seção de preview e uma organização no estilo projeto profissional do GitHub.
