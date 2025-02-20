function appendToDisplay(value) {
  const $displayField = document.querySelector('#display');
  $displayField.value += value;
}

function clearDisplay() {
  const $displayField = document.querySelector('#display');
  $displayField.value = '';
}

function calculateResult() {
  const $displayField = document.querySelector('#display');
  try {
    const expression = $displayField.value;
    if (expression.includes('/0')) {
      throw new Error('Division by zero');
    }
    const result = eval(expression);
    $displayField.value = result;
  } catch (error) {
    $displayField.value = 'Division by zero is not allowed';
  }
}