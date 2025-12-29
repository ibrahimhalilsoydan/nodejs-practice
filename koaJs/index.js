import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  if (ctx.path === '/' || ctx.path === '/index') {
    ctx.body = '<h1>Index Sayfası</h1>';
    return;
  }

  if (ctx.path === '/about') {
    ctx.body = '<h1>About Sayfası</h1>';
    return;
  }

  if (ctx.path === '/contact') {
    ctx.body = '<h1>Contact Sayfası</h1>';
    return;
  }

  // 404
  ctx.status = 404;
  ctx.body = '<h1>Sayfa bulunamadı</h1>';
});

app.listen(3000, () => {
  console.log('Koa 3000 portunda');
});
