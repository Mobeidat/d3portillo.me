const { TOKEN = false } = process.env
const PLAYLIST = "1msBg36rOAk4p4zmOoepAW"
const SpotifyWebApi = require("spotify-web-api-node")
const api = new SpotifyWebApi({
  clientId: "09b29b9c7a6c4b1ca457a24fcf05769f",
  clientSecret: TOKEN,
  redirectUri: "https://d3portillo.me"
})
exports.handler = (event, context, callback) => {
  const voidData = () => {
    const nothing = {
      statusCode: 200,
      body: JSON.stringify({})
    }
    callback(null, nothing)
  }
  if (TOKEN) {
    api.clientCredentialsGrant().then(
      data => {
        console.log("The access token expires in " + data.body["expires_in"])
        api.setAccessToken(data.body["access_token"])
        api
          .getPlaylistTracks(PLAYLIST)
          .then(({ body }) => {
            const itemIndex = Math.floor(Math.random() * body.items.length)
            //get a random element index
            const item = body.items[itemIndex]
            const response = {
              name: item.track.name,
              artists: item.track.artists
                .map(artist => {
                  return artist.name
                })
                .join(", "),
              cover: item.track.album.images[0].url,
              url: item.track.external_urls.spotify,
              preview: item.track.preview_url
            }
            callback(null, {
              statusCode: 200,
              body: JSON.stringify(response)
            })
          })
          .catch(voidData)
      },
      () => {
        console.log("Something went wrong when retrieving an access token")
        voidData()
      }
    )
  } else voidData()
}
