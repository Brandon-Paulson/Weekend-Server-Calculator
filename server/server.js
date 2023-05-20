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
    console.log('HERE WHAT IS THIS ', calculatingValue)
  for (let value of calculatingValue) {
    let solution = calculatingNumber(value);
    value.solution = solution;
  }
  res.sendStatus(201);
});

app.get('/solutionValue', (req, res) =>{
  console.log('Request for solution was made')
  res.status(201).send(calculatingValue)
})

app.delete('/solutionValue', (req, res) => {
  removeSolutionValue(req.params.solutionValue);
  res.sendStatus(204);
});

function calculatingNumber(inputObject) {
    if (inputObject.operator == '+' ) {
       let solutionValue = Number(inputObject.num1) + Number(inputObject.num2);
       return solutionValue ;
    }
    else if (inputObject.operator == '-') {
      let solutionValue = Number(inputObject.num1) - Number(inputObject.num2);
      return solutionValue;
    }
    else if (inputObject.operator == '*') {
      let solutionValue = Number(inputObject.num1) * Number(inputObject.num2);
      return solutionValue;
    }
    else {
      let solutionValue = Number(inputObject.num1) / Number(inputObject.num2);     
      return solutionValue;
    }
  };

