export const getMetas = ({
  title = "Denny Portillo",
  description = "Denny Portillo Personal Website",
  url = "https://d3portillo.me",
  image = "https://d3portillo.me/seo.png",
}) => {
  const TWITTER_USER = "d3portillo"
  if (!image.startsWith("http")) {
    image = `https://${`d3portillo.me/${image}`.replace(/\/+/g, "/")}`
  }
  return [
    {
      name: "author",
      content: TWITTER_USER,
    },
    {
      name: "keywords",
      content: "template,seo,things",
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "og:type",
      content: "article",
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content: image,
    },
    {
      name: "og:url",
      content: url,
    },
    {
      name: "og:site_name",
      content: title,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:image",
      content: image,
    },
    {
      name: "twitter:site",
      content: TWITTER_USER,
    },
    {
      name: "twitter:creator",
      content: TWITTER_USER,
    },
    {
      name: "twitter:image:alt",
      content: url,
    },
  ]
}
//Meta helper for static site generators
