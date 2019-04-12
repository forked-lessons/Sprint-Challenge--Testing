const server = require('./server.js');

server.listen(port, () => {
  console.log(`Server running at Port ${port}`);
});
