// Create web server, and set up routing
// to serve comments from the comments.json file.
// Use the fs module to read the comments.json file.

const express = require('express');
const fs = require('fs');
const app = express();

app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments file');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

