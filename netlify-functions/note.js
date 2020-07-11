exports.handler = (event, context, callback) => {
  const voidData = () => {
    const nothing = {
      statusCode: 200,
      body: JSON.stringify({}),
    }
    callback(null, nothing)
  }
  voidData()
}
