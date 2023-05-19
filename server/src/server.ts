import fastify from 'fastify'

const app = fastify()

// HTTP Method: GET, POST PUT,DELETE, PATCH

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀httpssss')
  })
