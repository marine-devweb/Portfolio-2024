// Sélectionnez l'élément contenant les cartes
const cards = document.querySelector('.cards');

// Créez les trois cartes
for (let i = 0; i < 3; i++) {
  // Créez un élément de carte
  const card = document.createElement('div');
  card.classList.add('card');
  
  // Créez un lien vide
  const link = document.createElement('a');
  link.href = '#'; // Ajoutez le lien souhaité ici
  
  // Ajoutez le lien à la carte
  card.appendChild(link);
  
  // Ajoutez la carte au conteneur
  cards.appendChild(card);
}
