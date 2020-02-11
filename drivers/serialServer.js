const net = require('net');
const server = net.createServer(function(c) { //'connection' listener
  console.log('client connected');
  c.on('end', function() {
    console.log('client disconnected');
  });
  c.on('data', function (data){
    console.log({data});
  });
});
server.listen('/dev/ttyACM0', function() { //'listening' listener
  console.log('server bound');
});