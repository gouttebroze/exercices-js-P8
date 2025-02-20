// n * 2 === 0
/**
 * ex 1
 * Créez une fonction pairNumbers contenant boucle JavaScript 
 * qui retourne une chaine de caractères avec 
 * tous les nombres pairs entre un minimum et maximum 
 * séparés par une virgule (sans espace). 
 * Exemple : pairNumbers(1, 10) retournera 2,4,6,8,10
 * @param {number} min 
 * @param {number} max 
 */
function pairNumbers(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr.toString();

}

console.log(pairNumbers(1, 10));

export default pairNumbers
