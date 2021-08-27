const jsonServer = require('json-server')
const server = jsonServer.create()
const express = require('express')
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const auth = require('json-server-auth');

server.use('/static', express.static(path.join(__dirname, 'public')))

server.use(middlewares)
 
server.db = router.db
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})


server.use(jsonServer.bodyParser) 
server.use(auth)
server.use(router)
server.listen(3002, () => {
  console.log('JSON Server is running')
})
