import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.js'
import { schema } from './schema/index.js'

await reset(db, schema)

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
        createdAt: f.date({ maxDate: new Date() }),
      },
    },
    questions: {
      count: 20,
    },
  }
})

await sql.end()

// biome-ignore lint/suspicious/noConsole: only in dev
console.log('Database seeded!')
