import fastify from 'fastify'

// const servidor = fastify({})

const servidor = fastify({
    logger: true
})

servidor.get('/teste', function controlador(requisicao, resposta) {
    const saudacao = 'Te Amo Gatinha Linda'
    return resposta.send(saudacao)
})

servidor.listen({
    port: 3000
})
