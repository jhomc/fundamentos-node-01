import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.setHeader('Content-type', 'application/json').end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email
    })

    return res.end('Usuário criado com sucesso')
  }

  return res.end('hello ignite')
})

server.listen(3333)