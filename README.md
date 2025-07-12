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

## Extensions

- [Biome](https://marketplace.cursorapi.com/items?itemName=biomejs.biome)
- [Custom UI Style](https://marketplace.cursorapi.com/items?itemName=subframe7536.custom-ui-style)
- [REST Client](https://marketplace.cursorapi.com/items?itemName=humao.rest-client)
- [Symbols](https://marketplace.cursorapi.com/items?itemName=miguelsolorio.symbols)
- [Tailwind CSS IntelliSense](https://marketplace.cursorapi.com/items?itemName=bradlc.vscode-tailwindcss)
