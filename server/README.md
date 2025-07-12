# NLW Agents - Server

Backend API for the NLW Agents project, developed during the 20th edition of the Rocketseat NLW (Next Level Week) event from July 8th to July 11th, 2025.

## 🚀 Technologies

- **Fastify** - High-performance web framework
- **Drizzle ORM** - Type-safe SQL ORM with PostgreSQL
- **Zod** - TypeScript-first schema validation
- **PostgreSQL** - Database with pgvector extension
- **TypeScript** - Type-safe JavaScript
- **Biome** - Fast formatter and linter with Ultracite rules

## 📁 Project Structure

```
server/
├── src/
│   ├── db/
│   │   ├── connection.ts      # Database connection setup
│   │   ├── schema/            # Database schemas
│   │   └── migrations/        # Database migrations
│   ├── http/
│   │   └── routes/            # API routes
│   ├── env.ts                 # Environment validation
│   └── server.ts              # Server entry point
├── docker/                    # Docker setup files
└── docker-compose.yml         # Database container
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- pnpm
- Docker & Docker Compose

### Installation

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start the database:**

   ```bash
   docker-compose up -d
   ```

3. **Set up environment variables:**
   Create a `.env` file with:

   ```env
   PORT=3333
   DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
   ```

4. **Run database migrations:**

   ```bash
   pnpm drizzle-kit migrate
   ```

5. **Seed the database (optional):**
   ```bash
   pnpm db:seed
   ```

## 🚀 Development

### Start development server:

```bash
pnpm dev
```

### Code quality:

```bash
# Check code
pnpm biome:check

# Format code
pnpm biome:format
```

## 📊 Database

- **Database**: PostgreSQL with pgvector extension
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Snake case naming convention
- **Migrations**: Automatic migration generation

## 🔧 API Endpoints

- `GET /health` - Health check
- `GET /rooms` - List all rooms

## 🎯 Project Patterns

- **Type Safety**: Full TypeScript with Zod validation
- **Modular Routes**: Fastify plugin-based route organization
- **Environment Validation**: Runtime environment validation with Zod
- **Database Schema**: Type-safe database operations with Drizzle
- **Code Quality**: Biome with Ultracite rules for consistent code style

## 📝 Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm start` - Start production server
- `pnpm db:seed` - Seed database with initial data
- `pnpm biome:check` - Check code quality
- `pnpm biome:format` - Format code

## 🐳 Docker

The project includes Docker setup for PostgreSQL with pgvector extension:

```bash
# Start database
docker-compose up -d

# Stop database
docker-compose down
```

---

**Developed by Douglas Dias Leal**  
**Event**: Rocketseat NLW - July 8-11, 2025
