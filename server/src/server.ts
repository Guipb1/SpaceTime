import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP Method: GET, POST PUT,DELETE, PATCH

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀http server running on localhost')
  })
