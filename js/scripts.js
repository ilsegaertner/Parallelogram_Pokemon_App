let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let ulList = document.querySelector('.all-pokes');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    button.classList.add('btn');
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#exampleModal");
    listpokemon.classList.add('list-group-item');
    listpokemon.appendChild(button);
    ulList.appendChild(listpokemon); 
    button.addEventListener('click', function(event){
    showDetails(pokemon)
    });
  }

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
      
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");

      modalTitle.empty();
      modalBody.empty();

      let nameElement = $("<h1>" + pokemon.name + "<h1>");
      let imageElementFront = $('<img class="modal-img" style="width:60%">');
      imageElementFront.attr("src", pokemon.imageUrl);
      let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
      let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>"); 
      let orderElement = $("<p>" + "order : " + pokemon.order + "</p>");
      
      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(orderElement);

    });
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

//search function
$(document).ready(function(){
  $('#pokemon-search').on('keyup', function(){
    var value = $(this).val().toLowerCase();
    $('.list-group-item').filter(function(){
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

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
