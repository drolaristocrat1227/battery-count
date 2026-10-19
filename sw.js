/* 移転後の後片付け用。
 * 以前インストールされたオフライン用の仕組みをこれに差し替え、
 * 自分のキャッシュを消して登録を外す。ほかのアプリのキャッシュには触らない。
 */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('battery-count-')).map(k => caches.delete(k)));
    await self.registration.unregister();
  })());
});
