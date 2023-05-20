let pokemonRepository = (function () {
  
  let pokemonList = [
    {
      name: 'Butterfree', 
      height: 1.1,
      type: ['Bug', 'Flying'],
      number: 12
    }, 
    {
      name: 'Charizard', 
      height: 1.7,
      type: ['Fire', 'Flying'],
      number: 6
    }, 
    {
      name: 'Jigglypuff', 
      height: 0.5,
      type: ['Fairy', 'Normal'], 
      number: 39
    }
  ];

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
    let button = document.createElement('button')
    button.innerText = pokemon.name; 
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    ulList.appendChild(listpokemon); 
    button.addEventListener('click', function(showDetails){
    console.log(pokemon);
    })
  }

  function showDetails(pokemon) {
  console.log (pokemon);  
  }

  return {
    getAll:getAll,
    add:add,
    addListItem:addListItem
  };

})();


// let pokemonList = pokemonRepository.getAll();
console.log(pokemonRepository.getAll());
pokemonRepository.add({
  name: 'Pikachu',
  height: 0.4,
  type: ['Electric'], 
  number: 42
});

console.log(pokemonRepository.getAll());

function loopPokemon(pokemon) {
  pokemonRepository.addListItem(pokemon);
}
let pokemonList = pokemonRepository.getAll();
pokemonList.forEach(loopPokemon);






/* background color change */

var background = document.getElementById('background-color');
background.addEventListener('click', changeColor, false);
background.addEventListener('dblclick', changeColor, false);


var colors = ["#2a2d9b", "#f1dfae5e", "#efeed8", "#81801e", "#a1a01d2b", "#8d8d8d", "#2a2d9b", "#d1d1d1"];

function changeColor() {
    var col = document.getElementById("background-color");
    col.style.backgroundColor = colors[Math.floor((Math.random()*7)+1)];
}
