import path from 'path'
import next from 'next'
import { config as dotenv } from 'dotenv'
import express from 'express'
import { renderToString } from '@kril-ds/react'

dotenv({ path: path.resolve(__dirname, '../.env') })

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = express()

const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

app.get('/_next/*', (req, res) => nextHandler(req, res))
app.get('*', async (req, res) => {
  const html = await nextApp.renderToHTML(req, res, req.path, req.params)
  const renderedHtml = await renderToString(html)
  return res.send(renderedHtml.html).end()
})

nextApp.prepare().then(() => {
  console.log('NextJS started')
  app.listen(port, async () => {
    console.log(`Server listening on: http://localhost:${port}`)
  })
})
