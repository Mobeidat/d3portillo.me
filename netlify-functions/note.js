const marked = require("marked")
const fetch = require("node-fetch")
const NOT_FOUND_URL = "https://d3portillo.me/404"
const LAYOUT = "https://d3portillo.me/layout"
exports.handler = (event, context, callback) => {
  const slug = event.path.replace("/notes/", "")
  const voidData = () => {
    callback(null, {
      statusCode: 302,
      headers: {
        Location: NOT_FOUND_URL,
      },
    })
  }
  const url = `https://raw.githubusercontent.com/wiki/D3Portillo/d3portillo.me/${slug}.md`
  fetch(url, {
    method: "HEAD",
  })
    .then((r) => {
      if (r.ok) {
        r.text().then((content) => {
          const html = marked(content)
          fetch(LAYOUT)
            .then((r) => r.text())
            .then((template) => {
              callback(null, {
                statusCode: 200,
                headers: {
                  "Content-type": "text/html",
                },
                body: template.replace("[CONTENT]", html),
              })
            })
        })
      } else voidData()
    })
    .catch(voidData)
}
