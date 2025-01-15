const { createServer } = require("http");
const next = require("next");
const os = require("os");

const app = next({ dev: true });
const handle = app.getRequestHandler();

// 로컬 IP 주소 가져오기
const getLocalIp = () => {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
};

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(PORT, HOST, () => {
    const localIp = getLocalIp();
    console.log(`
  ▲ Next.js 14.2.23
  - Local:        http://localhost:${PORT}
  - On Your Network: http://${localIp}:${PORT}
    `);
  });
});
