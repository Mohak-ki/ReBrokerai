const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml' };
const port = Number(process.env.PORT || 5173);

http.createServer((request, response) => {
  const requestPath = request.url === '/' ? '/index.html' : request.url.split('?')[0];
  const filePath = path.resolve(root, `.${requestPath}`);
  if (!filePath.startsWith(root)) { response.writeHead(403).end('Forbidden'); return; }
  fs.readFile(filePath, (error, data) => {
    if (error) { response.writeHead(error.code === 'ENOENT' ? 404 : 500).end('Not found'); return; }
    response.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    response.end(data);
  });
}).listen(port, () => console.log(`BrokerAI web app: http://localhost:${port}`));
