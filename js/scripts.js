
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

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  return {
    getAll:getAll,
    add:add
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
  if (pokemon.height > 1.5) {
    document.write("<p>" + pokemon.name + " " + '(' + 'Height:' + " " + pokemon.height + ')' + " " + '(' + 'Type:' + " " + pokemon.type + ')' + " " + 'Wow, that\'s big!!' + "</p>");
  } else {
    document.write ("<p>" + pokemon.name + " " + '(' + 'Height:' + " " + pokemon.height + ')' + " " + '(' + 'Type:' + " " + pokemon.type + ')' + "</p>");
  }
}

// pokemonList.forEach(loopPokemon);
let pokemonList = pokemonRepository.getAll();
pokemonList.forEach(loopPokemon);




/* my version

document.write(pokemonRepository.getAll());


function loopPokemon (pokemon) {
  if (pokemon.height > 1.5) {
    document.write("<p>" + pokemon.name + " " + '(' + 'Height:' + " " + pokemon.height + ')' + " " + '(' + 'Type:' + " " + pokemon.type + ')' + " " + 'Wow, that\'s big!!' + "</p>")
  } else {
    document.write ("<p>" + pokemon.name + " " + '(' + 'Height:' + " " + pokemon.height + ')' + " " + '(' + 'Type:' + " " + pokemon.type + ')' + "</p>")
  }
}

pokemonList.forEach(loopPokemon);


////////////////////////////////////////////////////////////////////////////////////////


//old for-Loop

for (let i=0; i <pokemonList.length; i++) {

  if (pokemonList[i].height > 1.5) {
    document.write ("<p>" + pokemonList[i].name + " " + '(' + 'Height:' + " " + pokemonList[i].height + ')' + " " + '(' + 'Type:' + " " + pokemonList[i].type + ')' + " " + 'Wow, that\'s big!!' + "</p>")
  } else {
  document.write ("<p>" + pokemonList[i].name + " " + '(' + 'Height:' + " " + pokemonList[i].height + ')' + " " + '(' + 'Type:' + " " + pokemonList[i].type + ')' + "</p>")
}

*/