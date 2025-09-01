const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
  const pathToHTMLFile = path.resolve(__dirname, '../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHTMLFile, 'utf-8');
  res.send(contentFromHtmlFile);    
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
