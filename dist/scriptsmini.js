let pokemonRepository=function(){let t=[];function e(){return t}function o(e){return t.push(e)}function n(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.weight=e.weight,t.order=e.order,t.types=e.types.type.name}).catch(function(t){console.error(t)})}function i(t){n(t).then(function(){let e=$(".modal-body"),o=$(".modal-title");$(".modal-header"),o.empty(),e.empty();let n=$("<h1>"+t.name+"<h1>"),i=$('<img class="modal-img" style="width:60%">');i.attr("src",t.imageUrl);let a=$("<p>height : "+t.height+"</p>"),r=$("<p>weight : "+t.weight+"</p>"),l=$("<p>order : "+t.order+"</p>");o.append(n),e.append(i),e.append(a),e.append(r),e.append(l)})}return{getAll:e,add:o,addListItem:function t(e){let o=document.querySelector(".all-pokes"),n=document.createElement("li"),a=document.createElement("button");a.innerText=e.name,a.classList.add("button-class"),a.classList.add("btn"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#exampleModal"),n.classList.add("list-group-item"),n.appendChild(a),o.appendChild(n),a.addEventListener("click",function(t){i(e)})},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){let e={name:t.name,detailsUrl:t.url};o(e),console.log(e)})}).catch(function(t){console.error(t)})},loadDetails:n,showDetails:i}}();function loopPokemon(t){pokemonRepository.addListItem(t)}$(document).ready(function(){$("#pokemon-search").on("keyup",function(){var t=$(this).val().toLowerCase();$(".list-group-item").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(t)>-1)})})});let pokemonList=pokemonRepository.getAll();pokemonList.forEach(loopPokemon),pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});