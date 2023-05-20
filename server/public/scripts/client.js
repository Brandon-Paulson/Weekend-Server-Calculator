console.log('Hey the server works!');

function submitForm(event) {
    // Stop page from refreshing
    event.preventDefault();

    console.log('Submitting...');

    // Get the values from our form
    let inputOne = document.querySelector('#inputValueOne').value;
    let inputTwo = document.querySelector('#inputValueTwo').value;
    let operator = document.querySelector('#arithmetic').value;

    console.log('Inputs:', inputOne, inputTwo, operator);

    let calculationInput = {
        num1: inputOne,
        num2: inputTwo,
        operator: operator,
    };
    console.log(calculationInput);

    fetch('/calculatingValue', {
        method: 'POST',
        body: JSON.stringify(calculationInput),  // <-- Must stringify your body!
        headers: {
            'Content-Type': 'application/json'  // <-- Must specify content is JSON!
        }
    }).then((response) => {
        console.log('POST Response:', response.json())
    }) .then (appendData())
    document.querySelector('#contentDiv').innerHTML = '';

}


function appendData() {
    fetch('/solutionValue' )
    .then(response => response.json())
    .then((json) => {
        console.log(json)
for (let value of json) {
        document.querySelector('#inputValueOne').value = '';
        document.querySelector('#inputValueTwo').value = '';
        document.querySelector('#arithmetic').value = '';
        document.querySelector('#contentDiv').innerHTML += `<p> ${value.solution} </p>`
}}
)};

function clearOnSubmit(onClick) {
    document.querySelector('#contentDiv').innerHTML = '';
    fetch('/solutionValue', {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'  
        }})
    .then(res => res.json())
    .then(res => console.log('THIS SPOT', res))
}
