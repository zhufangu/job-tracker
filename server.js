import express from 'express';
const app = express();

app.get('/', (req, res) => {
  // means when we hit the root URL, we will get the response
  res.send('Hello World'); // response will be Hello World
});

app.listen(5100, () => {
  // server will run on port 5100
  console.log('Server is running on http://localhost:5100');
});
