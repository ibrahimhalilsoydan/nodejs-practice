import http from "node:http";

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const message = "<h2>Index sayfasına hoşgeldiniz</h2>";
    res.end(message);
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const message = "<h2>Hakkımda sayfasına hoşgeldiniz</h2>";
    res.end(message);
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const message = "<h2>İletişim sayfasına hoşgeldiniz</h2>";
    res.end(message);
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404 SAYFA BULUNAMADI</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
