/**
 * Une page HTML contient un bouton avec le texte `Cliquez ici`. 
 * Lorsque l'utilisateur clique sur le bouton, 
 * affichez un message `Bonjour, vous avez cliqué sur le bouton !` 
 * dans un paragraphe sous le bouton. 
 * Vous devez mettre en place un observateur d’événement dans le 
 * fichier `index.js` afin d’afficher le message 
 * `Bonjour, vous avez cliqué sur le bouton !` lors du clic.
 */
const $myButton = document.querySelector('#myButton');
$myButton.addEventListener('click', () => {
  const $p = document.createElement('p');
  $p.textContent = `Bonjour, vous avez cliqué sur le bouton !`;
  $myButton.after($p);
})