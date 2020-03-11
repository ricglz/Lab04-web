(
  () => {
    let operation = "";
    const inputNumber = document.getElementById('inputNumber');
    const operatorIDs = [
      'addButton', 'substractButton', 'multiplicationButton', 'divisionButton'
    ];
    const getCurrentNumber = () => inputNumber.value;
    const clearCurrentNumber = () => inputNumber.value = '';

    function clickOperators(event) {
      const operator = event.target.innerText.trim();
      const number = getCurrentNumber();
      if(number == '') {
        alert('You must type a number before')
        return;
      }
      operation += `${number} ${operator} `;
      clearCurrentNumber();
    }

    function clickPerformOperation() {
      operation += getCurrentNumber();
      const result = eval(operation)
      document.getElementById('logInformation').value = `${operation} = ${result}`;
      document.getElementById('resultValue').value = result;
      clearCurrentNumber();
      operation = '';
    }

    function clickClear() {
      operation = '';
      clearCurrentNumber();
    }

    operatorIDs.forEach((id) => (
      document.getElementById(id).addEventListener('click', clickOperators))
    );

    document.getElementById('equalButton').
      addEventListener('click', clickPerformOperation);

    document.getElementById('resetButton').
      addEventListener('click', clickClear);
  }
)();
