exports.handler = (event, context, callback) => {
  console.log({event, context})
  const voidData = () => {
    const nothing = {
      statusCode: 200,
      body: JSON.stringify({}),
    }
    callback(null, nothing)
  }
  voidData()
}
