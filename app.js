const express = require('express');

const app = express();
const bookRoute = express.Router();
const port = process.env.PORT || 2323;


bookRoute.route('/books')
  .get((req, res) => {
    const request = {hello: "Welcome to my book API"};
    res.json(request);
  });
app.use('/api', bookRoute);


app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
