

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

function loopPokemon (pokemon) {
  if (pokemon.height > 1.5) {
    document.write("<p>" + pokemon.name + " " + '(' + 'Height:' + " " + pokemon.height + ')' + " " + '(' + 'Type:' + " " + pokemon.type + ')' + " " + 'Wow, that\'s big!!' + "</p>")
  } else {
    document.write ("<p>" + pokemon.name + " " + '(' + 'Height:' + " " + pokemon.height + ')' + " " + '(' + 'Type:' + " " + pokemon.type + ')' + "</p>")
  }
}

pokemonList.forEach(loopPokemon);

/* old for-Loop

for (let i=0; i <pokemonList.length; i++) {

  if (pokemonList[i].height > 1.5) {
    document.write ("<p>" + pokemonList[i].name + " " + '(' + 'Height:' + " " + pokemonList[i].height + ')' + " " + '(' + 'Type:' + " " + pokemonList[i].type + ')' + " " + 'Wow, that\'s big!!' + "</p>")
  } else {
  document.write ("<p>" + pokemonList[i].name + " " + '(' + 'Height:' + " " + pokemonList[i].height + ')' + " " + '(' + 'Type:' + " " + pokemonList[i].type + ')' + "</p>")
}

*/