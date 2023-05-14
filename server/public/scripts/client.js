console.log('Hey the server works!');

function sendArithmetic(event) {
    event.preventDefault();
    let dataSet= {
    inputOne: document.querySelector('#inputValueOne').value,
    inputArithmetic: document.querySelector('#arithmetic').value,
    inputTwo: document.querySelector('#inputValueTwo').value
    }
    console.log(dataSet);
    console.log(dataSet.inputOne);
    if (dataSet.inputArithmetic == '+' ) {
        document.querySelector('#contentDiv').innerHTML += (Number(dataSet.inputOne) + Number(dataSet.inputTwo));
    }
    else if (dataSet.inputArithmetic == '-') {
        document.querySelector('#contentDiv').innerHTML += (Number(dataSet.inputOne) - Number(dataSet.inputTwo));
    }
    else if (dataSet.inputArithmetic == '*') {
        document.querySelector('#contentDiv').innerHTML += (Number(dataSet.inputOne) * Number(dataSet.inputTwo));
    }
    else {
        document.querySelector('#contentDiv').innerHTML += (Number(dataSet.inputOne) / Number(dataSet.inputTwo));
    }
};
