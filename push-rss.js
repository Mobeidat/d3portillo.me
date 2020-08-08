const fetch = require("node-fetch")
const baseURL = `https://raw.githubusercontent.com/wiki/D3Portillo/d3portillo.me`
const settings = {
  name: "D3Portillo / Notes",
  link: "https://d3portillo.me/notes",
  description:
    "Lo que postearé puede tener errores ortograficos. Aveces puede ser contenido en inglés o español. Si no estás de acuerdo con el término, disculpas.",
}
fetch(baseURL + "/Home.md")
  .then((r) => r.text())
  .then((text) => {
    Promise.all(
      text.match(/(- ).+\n/g).map((item) => {
        const slug = item.split("/").pop()
        const itemURL = `${baseURL}/${slug.trim()}.md`
        return new Promise((send) => {
          fetch(itemURL)
            .then((r) => r.text())
            .then((content) => {
              const [title, resume] = content.split("\n\n")
              send({ title: title.replace("#", ""), resume, slug })
            })
        })
      })
    ).then((entries) => {
      const items = entries
        .map(({ title, slug, resume }) => {
          const url = `https://d3portillo.me/notes/${slug}`
          return `<item><title>${title}</title><link>${url}</link><description>${resume}</description><guid>${slug}</guid></item>`
        })
        .join("")
      const data = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>${settings.name}</title><link>${settings.link}</link><description>${settings.description}</description>${items}</channel></rss>`
      require("fs").writeFileSync("./feed.xml", data)
    })
  })
