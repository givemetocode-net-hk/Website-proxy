addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  url.hostname = 'orign.givemetocode.com'; // Replace with your server's hostname

  const modifiedRequest = new Request(url, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  });

  return fetch(modifiedRequest);
}
