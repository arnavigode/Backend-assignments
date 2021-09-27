const path = require('path');
const jsonServer = require('json-server')
const server = jsonServer.create()
const riuter = jsonServer.router(path.join(_dirname, 'db.json'))
const middlewares = jsonServer.defaults();

server.use(middlewares)

server.use(jsonServer.bodyParse)

server.use('/api', router)

server.listen(PORT, ()=> console.log(`JSON server is running on port ${PORT}`))