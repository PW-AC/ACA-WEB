const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy API requests to backend during development
module.exports = function(app) {
  const target = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
      secure: false,
      xfwd: true,
    })
  );
};

