// incrementar y decrementar
$(document).ready(function () {
  function agregarFuncionalidad(contenedor) {
    // aqui se obtendra la cantidad y los botobes incre y decre, estos se guardaran dentro del contenedor
        const contador = contenedor.querySelector('.input-quantity');
        const btnIncrementar = contenedor.querySelector('.btn-increment-decrement i.bi-chevron-compact-up');
        const btnDecrementar = contenedor.querySelector('.btn-increment-decrement i.bi-chevron-compact-down');
    // este le agregue un evento para los botones incrementar y decrementar
        btnIncrementar.addEventListener('click', () => {
          if (parseInt(contador.value) < contador.max) {
            contador.value = parseInt(contador.value) + 1;
          };
        });
        btnDecrementar.addEventListener('click', () => {
          if (parseInt(contador.value) > 1) {
            contador.value = parseInt(contador.value) - 1;
          };
        });
      };
      //este lo que hara es llamar la funcion para agregar a cada producto que este dentro de la card  
      const productos = document.querySelectorAll('.card');
      productos.forEach(producto => {
        agregarFuncionalidad(producto);
      });
   
      //Buscador de productos
      const form = document.querySelector('form');
      const searchInput = form.querySelector('input[type="search"]');
      const cards = document.querySelectorAll('.card');
      const suggestionsContainer = document.createElement('ul');
      
      suggestionsContainer.classList.add('suggestions');
      searchInput.parentNode.appendChild(suggestionsContainer);
      let highlightTimeout;
      
      form.addEventListener('input', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        const suggestions = [];
      
        cards.forEach(function(card) {
          const title = card.querySelector('.card-title').textContent.trim().toLowerCase();
          if (title.includes(searchTerm)) {
            card.classList.remove('highlight');
            card.style.opacity = '1';
            suggestions.push({
              title: title,
              image: card.querySelector('.card-img-top').src,
              product: card
            });
          } else {
            card.style.opacity = '0.5';
          }
        });
        displaySuggestions(suggestions);
      });
      
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        suggestionsContainer.style.display = 'none';
        searchInput.value = '';
      });
      
      function displaySuggestions(suggestions) {
        suggestionsContainer.innerHTML = '';
      
        suggestions.forEach(function(suggestion) {
          const suggestionItem = document.createElement('li');
          suggestionItem.classList.add('suggestion');
          const suggestionContent = document.createElement('div');
          suggestionContent.innerHTML = `
            <img src="${suggestion.image}" />
            <span>${suggestion.title}</span>
          `;
          suggestionItem.appendChild(suggestionContent);
          suggestionItem.addEventListener('click', function() {
            suggestion.product.classList.add('highlight');
            suggestion.product.scrollIntoView({ behavior: 'smooth' });
            clearTimeout(highlightTimeout);
            highlightTimeout = setTimeout(function() {
              suggestion.product.classList.remove('highlight');
            }, 2000);
            suggestionsContainer.style.display = 'none';
            searchInput.value = '';
          });
          suggestionsContainer.appendChild(suggestionItem);
        });
        suggestionsContainer.style.display = suggestions.length > 0 ? 'block' : 'none';
      }
      
      document.addEventListener('click', function(event) {
        const target = event.target;
        if (!form.contains(target) && target !== searchInput) {
          suggestionsContainer.style.display = 'none';
          searchInput.value = '';
        }
      });      
});

/*futuro Loading de carga*/



