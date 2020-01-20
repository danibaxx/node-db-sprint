const server = require('./server');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;

server.listen(port, host, () => {
  console.log(`\n Running on http://${host}:${port} \n`)
})