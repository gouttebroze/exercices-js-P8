/**
 * @param {number} a 
 * @param {number} b 
 * @param {string} operator 
 * @returns 
 */
function calculate(a, b, operator) {
  if (operator === '+') {
    return Number(a) + Number(b);
  } else if (operator === '-') {
    return Number(a) - Number(b);
  } else if (operator === '*') {
    return Number(a) * Number(b);
  } else if (operator === '/') {
    if (Number(b) === 0) {
      return "Division by zero is not allowed";
    } else {
      return Number(a) / Number(b);
    }
  } else if (operator === '%' || operator === '' || operator === '@' || typeof operator === 'number') {
    return "Invalid operator";
  }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
