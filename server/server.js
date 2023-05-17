const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('server running on: ', PORT);
  });

  app.get('/calculatingValue', (req, res) => {
    res.status(200).send(req.params);
});

  app.post('/calculatingValue',(req, res) => {    
    calculatingValue.push(req.body);
    res.sendStatus(201);
});
