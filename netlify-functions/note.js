const marked = require("marked")
const NOT_FOUND_URL = `https://d3portillo.me/404`
const fetch = require("node-fetch")
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

  console.log({ slug, context, event })
  const url = `https://raw.githubusercontent.com/wiki/D3Portillo/d3portillo.me/${slug}.md`
  fetch(url)
    .then((r) => r.text())
    .then((content) => {
      const body = marked(content)
      callback(null, {
        statusCode: 200,
        headers: {
          "Content-type": "text/html",
        },
        body,
      })
    })
    .catch(voidData)
}
