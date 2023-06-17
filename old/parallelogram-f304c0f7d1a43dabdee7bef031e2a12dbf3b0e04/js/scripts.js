let pokemonRepository = (function () {
  
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let ulList = document.querySelector('.all-pokes');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button')
    button.innerText = pokemon.name; 
    button.classList.add('button-class');
    listpokemon.classList.add('list-group-item');
    listpokemon.appendChild(button);
    ulList.appendChild(listpokemon); 
    button.addEventListener('click', function(event){
    showDetails(pokemon)
    });
  }

  //new API functions loadList and loadDetails
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.order = details.order;
      item.types = details.types.type.name;
    })
    .catch(function (e) {
      console.error(e);
    });
  }


  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      
      // _________________________inserted modal function
      
      // Clear all existing modal content
      modalContainer.innerHTML = '';
    
      let modal = document.createElement('div');
      modal.classList.add('modal');
    
       // Add the new modal content
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);
    
      let titleElement = document.createElement('h1');
      titleElement.innerText = pokemon.name;
    
      let contentElement = document.createElement('p');
      contentElement.classList.add('modal-p');
      contentElement.innerText = `Height: ${pokemon.height}, Weight: ${pokemon.weight}, Order: ${pokemon.order}`;

      
    
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);

      let myImage = document.createElement('img');
      myImage.classList.add('pokemon-images');
      myImage.src = pokemon.imageUrl;
      modal.appendChild(myImage);
      

      modalContainer.appendChild(modal);
      
    
      modalContainer.classList.add('is-visible');
 
      document.querySelector('.button-class').addEventListener('click', () => {
        showDetails(pokemon);
      });
                                                                 
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
         }
      });

      modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });

    })
  }
    
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails, 
    showDetails: showDetails
  };

})();

function loopPokemon(pokemon) {
  pokemonRepository.addListItem(pokemon);
}
let pokemonList = pokemonRepository.getAll();
pokemonList.forEach(loopPokemon);

//new loadList
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});





/* _____________changing background color on click________________________ 

var background = document.getElementById('background-color');
background.addEventListener('click', changeColor, false);
background.addEventListener('dblclick', changeColor, false);

// var colors = ["#2a2d9b", "#f1dfae5e", "#efeed8", "#81801e", "#a1a01d2b", "#8d8d8d", "#2a2d9b", "#d1d1d1"];
var colors = ["#cdcccc", "#a7a7a7", "#afafaf", "#878787", "#2c2c2c", "#d7d7d7", "#ebebeb", "#a1a1a1"];

function changeColor() {
    var col = document.getElementById("background-color");
    col.style.backgroundColor = colors[Math.floor((Math.random()*7)+1)];
}
changeColor();

*/