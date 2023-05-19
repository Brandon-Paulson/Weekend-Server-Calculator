const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.static('server/public'));
app.use(express.json());


app.listen(PORT, () => {
    console.log('server running on: ', PORT);
  });

  let calculatingValue = [];

  app.get('/calculatingValue', (req, res) => {
    console.log('GET Request for quotes', req)
    res.status(200).send(calculatingValue);
});

app.post('/calculatingValue', (req, res) => {
  // The data (body) sent from the client is saved for us in `req.body`

  // Note that without express.json (or some other body-parsing middleware),
  // req.body will be undefined!

  console.log('Adding new value:', req.body);
  calculatingValue.push(req.body);
  // Send back a status code of 201
  res.sendStatus(201);
});
