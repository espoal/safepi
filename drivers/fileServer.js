const fs = require('fs');

const serialPort = fs.createReadStream('/dev/ttyACM0');

serialPort.on('data', (chunk) => {
  console.log({chunk});
  console.log(`\n Received ${chunk.length} bytes of data. \n`);
});
