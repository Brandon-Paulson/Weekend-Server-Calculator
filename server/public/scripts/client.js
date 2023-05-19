console.log('Hey the server works!');


// function sendArithmetic(event) {
//     event.preventDefault();
//     let dataSet= {
//     inputOne: document.querySelector('#inputValueOne').value,
//     inputArithmetic: document.querySelector('#arithmetic').value,
//     inputTwo: document.querySelector('#inputValueTwo').value
//     }
//     console.log(dataSet);
//     console.log(dataSet.inputOne);
//     if (dataSet.inputArithmetic == '+' ) {
//         document.querySelector('#contentDiv').innerHTML += `<div> ${(Number(dataSet.inputOne) + Number(dataSet.inputTwo))} </div>`;
//     }
//     else if (dataSet.inputArithmetic == '-') {
//         document.querySelector('#contentDiv').innerHTML += `<div> ${(Number(dataSet.inputOne) - Number(dataSet.inputTwo))} </div>`;
//     }
//     else if (dataSet.inputArithmetic == '*') {
//         document.querySelector('#contentDiv').innerHTML += `<div> ${(Number(dataSet.inputOne) * Number(dataSet.inputTwo))} </div>`;
//     }
//     else {
//         document.querySelector('#contentDiv').innerHTML += `<div> ${(Number(dataSet.inputOne) / Number(dataSet.inputTwo))} </div>`;
//     }
// };

// const formInput = document.querySelector('#submitForm')


// formInput.addEventListener('submit', event => {
//     event.preventDefault();
//     console.log(formInput);
//     const formData = new FormData(formInput);
//     console.log(formData);
//     formData.get('/calculatingValue');
//     fetch('/calculatingValue', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     }).then(res => res.json())
// });

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
      console.log('POST Response:', response.json());
  
      // Clear our form
      document.querySelector('#inputValueOne').value = '';
      document.querySelector('#inputValueTwo').value = '';
      document.querySelector('#arithmetic').value = '';
      // Clear our content and refresh it
    //   document.querySelector('#submitForm').innerHTML = '';
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong.');
    });
}