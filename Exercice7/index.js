const $result = document.querySelector('#binaryResult');
const $input = document.querySelector('#decimalInput');
console.log($input);


function convertToBinary(nbrToConvert) {

  nbrToConvert = $input.value;
  let binary = '';
  let number = Number(nbrToConvert);

  if (isNaN(number)) {
    $result.textContent = '';
    return;
  }

  while (number > 0) {
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }

  $result.textContent = binary || '0';
}

// Example usage
console.log(convertToBinary(10)); // Output: 1010
