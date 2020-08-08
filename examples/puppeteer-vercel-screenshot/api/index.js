/**
 * Capturar una web usando Puppeteer
 * https://d3portillo.me/notes/puppeteer-vercel-serverless-functions-para-tomar-capturas-a-tu-website
 */

const chromium = require("chrome-aws-lambda")

// * Consts setup

/**
 * Url de website a tomar capura
 * @type {string} https://ejemplo.com
 */
const URL = `https://vercel.com/home`
const SEO_RESOLUTION = { width: 1200, height: 630 }

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
module.exports = async (req, res) => {
  /**
   * El mismo sabor de Express ?
   * Express.js-like helper methods from the Request and Response.
   * @tutorial https://vercel.com/docs/serverless-functions/introduction
   */

  /**
   * Instanciamos nuestro Chrome
   * @type {import("puppeteer-core").Browser}
   */
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  })

  /**
   * Instanciamos nuestro Chrome
   * @type {import("puppeteer-core").Page}
   */
  const page = await browser.newPage()
  page.setViewport(SEO_RESOLUTION)

  // Navegamos hasta el url y esperamos que termines todos los requests
  await page.goto(URL, { waitUntil: "networkidle0" })
  /**
   * @type {Buffer}
   */
  const screenShotBuffer = await page.screenshot()
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": Buffer.byteLength(screenShotBuffer),
  })
  res.end(screenShotBuffer)
}
