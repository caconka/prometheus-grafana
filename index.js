const server = require('./src/server')
const PORT = 8080

server.listen(PORT, () => {
	console.log('server started', 'port', PORT)
})
