const http = require('http');
const options = { hostname: 'localhost', port: 5000, path: '/api/users/2/stats', method: 'GET' };
const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('STATUS:', res.statusCode, '\nBODY:', data));
});
req.on('error', e => console.error('ERROR:', e.message));
req.end();
