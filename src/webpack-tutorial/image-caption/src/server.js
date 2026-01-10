const express = require('express')
const path = require('path')

const app = express()
const fs = require('fs')

app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/image-caption.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
    res.send(contentFromHtmlFile)
})

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.listen(9003, () => {
    console.log('Server is listening on http://localhost:9003')
})