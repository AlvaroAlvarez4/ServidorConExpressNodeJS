
const http = require('http');


function serverConfig(request, response) {
    console.log('Peticion Rebida');
    
    response.end()
};
let server = http.createServer(serverConfig);
server.listen(3000);
