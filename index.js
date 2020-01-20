const server = require('./server.js');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong!"
  })
});

server.get('/', (req, res) => {
  res.json({
    message: "Welcome to Projects API"
  });
});

server.listen(port, host, () => {
  console.log(`\n Running on http://${host}:${port} \n`)
})