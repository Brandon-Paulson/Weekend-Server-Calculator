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
    });
    // fetch('/solutionValue')
    // .then((json) => {
    //     console.log('We are at the solution:', JSON.stringify(json));
    // })
    // .catch((error) => {
    //     console.log(error);
    //     alert('Something went wrong.');
    // });
fetch('/solutionValue')
  .then((response) => {
    console.log('Response:', response);
    return response.json();
  })
  .then((json) => {
    console.log('Response text:', json);
    // TODO: append quotes to the dom?
  })
  .catch((error) => {
    console.log(error);
    alert('Something went wrong.');
  });
    }
        // Clear our form
        //   document.querySelector('#inputValueOne').value = '';
        //   document.querySelector('#inputValueTwo').value = '';
        //   document.querySelector('#arithmetic').value = '';
        // Clear our content and refresh it
        //   document.querySelector('#submitForm').innerHTML = '';
   

//  fetch('/solutionValue')
//         .then((response) => {
//             console.log('We are at the solution:', response);
//         })
//         .catch((error) => {
//             console.log(error);
//             alert('Something went wrong.');
//         });

