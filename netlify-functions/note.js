const marked = require("marked")
const fetch = require("node-fetch")
const cheerio = require("cheerio")
const hljs = require("highlight.js")

const NOT_FOUND_URL = "https://d3portillo.me/404"
const LAYOUT = "https://d3portillo.me/layout.html"

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
  fetch(url)
    .then((r) => {
      if (r.ok) {
        return r.text().then((content) => {
          const noteHTML = marked(content)
          fetch(LAYOUT)
            .then((r) => r.text())
            .then((template) => {
              const $ = cheerio.load(template.replace("[CONTENT]", noteHTML))
              $("script[src]").remove()
              const h1 = $("h1")
                .first()
                .html()
              const p = $("p")
                .first()
                .text()
              $("head")
                .append(`<title>Note | ${h1}</title>`)
                .append(`<meta name="description" content="${p}">`)
                .append(`<meta name="author" content="D3Portillo">`)
              $("pre code").each((_, e) => {
                const $e = $(e)
                const highlightedCode = hljs.highlightAuto($e.text()).value
                $e.html(highlightedCode)
              })
              const body = $.html()
              callback(null, {
                statusCode: 200,
                headers: {
                  "Content-type": "text/html",
                  "Access-Control-Allow-Origin": "*",
                },
                body,
              })
            })
        })
      }
      voidData()
    })
    .catch(voidData)
}
