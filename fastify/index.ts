import Fastify from 'fastify'
const fastify = Fastify()

fastify.get('/hello', function (request, reply) {
    reply.send("hello world")
})

fastify.listen({ port: 8000 })
