const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(jsonServer.bodyParser)

server.use(router)
server.use(jsonServer.rewriter({
  "/lists/:id/tasks": "/tasks?listsId=:id"
}))
server.listen(process.env.PORT || 3000, ()=>{
  console.log(`app is running on port ${process.env.PORT}`)
})