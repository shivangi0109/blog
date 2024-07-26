const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  res.status(201).send(`Post with this id - ${posts[id]} has been created`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the back end! 😃');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} 😃`);
})