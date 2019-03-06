const fs = require('fs');
const path = require('path');

const readFile = fileName => {
  try {
    return fs.readFileSync(path.resolve(fileName));
  } catch (error) {
    return undefined;
  }
};

const serverConfig = {
  hostName: 'your.server.org',
  connection: {
    port: '3002',
    secure: true,
  },
  credentials: {
    rootCertificate: readFile('/path/root.crt'),
    clientCertificate: readFile('/path/client.crt'),
    clientKey: readFile('/path/client.key'),
  },
};

module.exports = serverConfig;
