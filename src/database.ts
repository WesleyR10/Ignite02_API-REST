import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
  client: 'sqlite', // banco de dados que estamos usando.
  connection: {
    filename: './tmp/app.db', // Onde esta meu banco de dados.
  },
})
