const http      = require('http');
const server    = new http.Server();
const fs        = require('fs');

function getFileContent(file) {
    return new Promise((resolve, reject) => {
        fs.readFile( file, 'utf8', (err, data) => {
            if(err) return reject(err);
            return resolve( data );
        });
    });
}

async function getHtmlPage() {
    try {
        const saludo    = "Hola mundo con eval()";
        const htmlPage  = await getFileContent( 'templates/index.html' ); 
        return eval(`\`${htmlPage}\``);
    } catch(error) {
        throw error;
    }
}

server.on('request', async (req, res) => {
    try {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const htmlPage = await getHtmlPage();
        res.write( htmlPage );
    } catch(err) {
        console.dir( err );
        res.writeHead(500, {'Content-Type': 'text/html'});
        const htmlPage = "Error en el servidor";
        res.write( htmlPage );
    } finally {
        res.end();
    }
});

const port = 3000;
console.log(`Server listen on port ${port}`);
server.listen( port );
