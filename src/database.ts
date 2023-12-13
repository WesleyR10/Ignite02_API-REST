import { env } from './env'
import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite', // banco de dados que estamos usando.
  connection: {
    filename: env.DATABASE_URL, // Onde esta meu banco de dados.
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
