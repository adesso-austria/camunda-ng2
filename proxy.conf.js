const PROXY_CONFIG = {
  "/workflow-engine": {
    "target": "http://localhost:8080",
    "secure": false,
    "logLevel": "debug",
    "onProxyRes": function (proxyRes, req, res) {
      proxyRes.headers['www-authenticate'] = "";
    }
  }
}
module.exports = PROXY_CONFIG;
