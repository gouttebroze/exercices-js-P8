/* Créez une fonction JavaScript appelée `calculateAverage` 
qui prend un tableau de nombres en tant que paramètre et 
retourne la moyenne de ces nombres. 
Si le tableau est vide, il faudra retourner un message 
`No numbers to calculate average` 
*/
/**
 * fn de calcul la somme des nbres d'1 tableau, 
 * & retourne un msg d'erreur si le tab. est vide
 * @param {number[]} arrayNumbers 
 * @returns {number} moyenne des nbres du tableau
 */
function calculateAverage(arrayNumbers) {
  let sum = 0; // represente la somme des items du tab.
  // ds le cas où le tab. est vide (soit undefined)
  if (arrayNumbers === undefined) {
    return "No numbers to calculate average";
  }
  // on calcule la somme des nbres du tab.
  for (let arr of arrayNumbers) {
    sum = sum + arr;
  }
  // & enfin, on divise la somme des nbres par le nbres d'items du tab.
  return sum / arrayNumbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
