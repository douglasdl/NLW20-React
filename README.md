# NLW20-React

## Server

Create the Project:

```sh
npm init -y
```

Install the dependencies:

```sh
pnpm i typescript @types/node -D
```

Create the tsconfig:

```sh
npx tsc --init
```

- [tsconfig bases](https://github.com/tsconfig/bases?tab=readme-ov-file)

Install dependencies:

```sh
pnpm i fastify @fastify/cors fastify-type-provider-zod zod
```

Biome:

```sh
pnpm i @biomejs/biome -D
```

- [Ultracite](https://www.ultracite.ai/)

```sh
pnpm dlx ultracite init
```

- [Docker](https://www.docker.com/)
- [Docker Hub](https://hub.docker.com/r/pgvector/pgvector)

```sh
docker -v
```

```sh
docker ps
# or
docker ps -a
```

```sh
docker stop <id>
# or
docker stop <id> <id>
```

```sh
docker compose up -d
```

```sh
docker logs <id>
#
docker logs <id> -f
```

```sh
pnpm i postgres
pnpm i drizzle-orm
pnpm i drizzle-kit -D
pnpm i drizzle-seed -D
```

```sh
npx drizzle-kit generate
```

```sh
npx drizzle-kit migrate
```

```sh
npx drizzle-kit studio
```

Cursor: README.md

```sh
Write a README.md file for the project @server containing technical information about used libraries, project patherns and the project setup and settings accordingly with the used libraries. Keep the README simple and containing only the most important information. Remember to tell that this project name is NLW Agents and it  was developed during a Rocketseat event from JUL/08/2025 to JUL/11/2025.
```

## Web

Create the project

```sh
pnpm create vite@latest web
```

Biome:

```sh
pnpm i @biomejs/biome -D
```

- [Ultracite](https://www.ultracite.ai/)

```sh
pnpm dlx ultracite init
```

```sh
pnpm install tailwindcss @tailwindcss/vite
```

- [Shadcn](https://ui.shadcn.com/)

```sh
pnpm add -D @types/node
```

```sh
pnpm dlx shadcn@latest init
```

Add Components:

```sh
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add badge
pnpm dlx shadcn@latest add form
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add textarea
```

Router DOM

```sh
pnpm i react-router-dom
```

React Query:

```sh
pnpm i @tanstack/react-query
```

Day.js

```sh
pnpm i dayjs
```

React Hook Form:

```sh
pnpm i @hookform/resolvers
```

Audio

```sh
pnpm i @types/dom-speech-recognition -D
```

## Extensions

- [Biome](https://marketplace.cursorapi.com/items?itemName=biomejs.biome)
- [Custom UI Style](https://marketplace.cursorapi.com/items?itemName=subframe7536.custom-ui-style)
- [REST Client](https://marketplace.cursorapi.com/items?itemName=humao.rest-client)
- [Symbols](https://marketplace.cursorapi.com/items?itemName=miguelsolorio.symbols)
- [Tailwind CSS IntelliSense](https://marketplace.cursorapi.com/items?itemName=bradlc.vscode-tailwindcss)

- [Additional Material](https://efficient-sloth-d85.notion.site/NLW-Agents-21b395da57708010b523fa89c461ba29)
