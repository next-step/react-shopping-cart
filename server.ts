// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./src/mocks/db.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }),
)

server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})

module.exports = server
