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
  
for (let i=0; i <pokemonList.length; i++) {
  document.write (" " + pokemonList[i].name + " " + '(' + 'Height:' + " " + pokemonList[i].height + ')' + " " + '(' + 'Type:' + " " + pokemonList[i].type + ')')
}