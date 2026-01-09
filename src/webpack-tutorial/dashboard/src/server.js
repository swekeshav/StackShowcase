const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.use((req, res) => {
    const pathToHTMLFile = path.resolve(__dirname, '../dist/dashboard.html')
    const contentFromHtmlFile = fs.readFileSync(pathToHTMLFile, 'utf-8')
    res.send(contentFromHtmlFile)
})

app.listen(9000, () => {
    console.log('Server is running on http://localhost:9000/')
})
