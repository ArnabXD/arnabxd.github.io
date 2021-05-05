# ArnabXD.Me
My Personal Website

### CLOUDFLARE WORKER CONTACT API

```js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const config = {
  token: TOKEN, // Bot Token
  chat: CHAT // OWNER_ID / CHANNEL_ID
}

let headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "no-cache, no-store, must-revalidate"
}

async function handleRequest(request) {
  if (request.method == "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Max-Age": "3600",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    })
  }
  if (request.method !== 'POST') {
    return Response.redirect('https://arnabxd.github.io', 301)
  }
  let req = await request.json();
  if (req.name && req.email && req.message) {
    let resp = await fetch(`https://api.telegram.org/bot${config.token}/sendMessage`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "chat_id": config.chat,
        "text":
          `<b>Name : </b>${req.name}\n` +
          `<b>Email : </b>${req.email}\n` +
          `<b>Message : </b><code>${req.message}</code>`,
        parse_mode: "HTML"
      })
    })
    console.log(await resp.json());
    return new Response(JSON.stringify({ message: "OK" }), { status: 200, headers })
  } else {
    return new Response(JSON.stringify({ message: "GO AWAY" }), { status: 203, headers })
  }
}
```