const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('server running on: ', PORT);
  });