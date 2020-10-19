const { createProxyMiddleware } = require('http-proxy-middleware');
const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : 'http://localhost:5000';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: apiUrl,
      changeOrigin: true,
    })
  );
};