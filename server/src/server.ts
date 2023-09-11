import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
const app = fastify()

app.register(cors, {
  origin: true /* qualquer front end pode acessar */,
})

/* serve para registrar um arquivo de rotas separados */
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀http server running on localhost')
  })
