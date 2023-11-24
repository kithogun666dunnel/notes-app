const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Specify the base URL path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:4000', // Change this to match your server's URL
      changeOrigin: true,
    })
  );
};
