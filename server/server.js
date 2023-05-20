const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.static('server/public'));
app.use(express.json());

let calculatingValue = [];

app.listen(PORT, () => {
    console.log('server running on: ', PORT);
  });

app.get('/calculatingValue', (req, res) => {
    console.log('GET Request for values', req)
    res.status(200).send(calculatingValue);
});

app.post('/calculatingValue', (req, res) => {
  // The data (body) sent from the client is saved for us in `req.body`
  console.log('Adding new value:', req.body);
  calculatingValue.push(req.body);
  res.sendStatus(201);
  calculatingNumber(calculatingValue);
});

app.get('/solutionValue', (req, res) =>{
  console.log('Request for solution was made')
  console.log('Hey this is where we are looking', calculatingNumber(calculatingValue))
  res.status(201).send({value:calculatingNumber(calculatingValue)})
})


// app.post('/solutionValue', (req, res) => {
//   console.log('Adding solution value:', req.body);
//   solutionValue.push(req.body);
//   res.sendStatus(201);
//   calculatingNumber(calculatingValue);
// });


function calculatingNumber(array) {
  console.log(array);
  for (let index of array) {
    if (index.operator == '+' ) {
       let solutionValue = Number(index.num1) + Number(index.num2);
       return solutionValue;
    }
    else if (index.operator == '-') {
      let solutionValue = Number(index.num1) - Number(index.num2);
      return solutionValue;
    }
    else if (index.operator == '*') {
      let solutionValue = Number(index.num1) * Number(index.num2);
      return solutionValue;
    }
    else {
      let solutionValue = Number(index.num1) / Number(index.num2);     
      return solutionValue;
    }
  }
};

