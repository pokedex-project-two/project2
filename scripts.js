// App object pokedexAppApp
const pokedexApp = {};

// Initalize preset data
pokedexApp.getGen1Pokemon = function () {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151/";

  fetch(url)
    .then(function (results) {
      return results.json();
    })
    .then(function (jsonResults) {
      jsonResults.results.forEach(function (poke) {
        pokedexApp.pokeInfo(poke);
      })
    });
};

pokedexApp.pokeInfo = function (poke) {
  const pokeUrl = poke.url;
  fetch(pokeUrl)
    .then(results => results.json())
    .then(function (kantoData) {
      pokedexApp.displayPokemon(kantoData);
    })
}

pokedexApp.displayPokemon = function (kantoData) {
  const images = document.createElement("img");
  images.src = kantoData.sprites.front_default;
  images.alt = kantoData.name;
  // console.log(images);
  document.querySelector(".pokemon").appendChild(images);
}

  // fetch(pokemon)
  // .then( function (results){
  //   return results.json();
  // }).then (function (pokeName){
  //   console.log(pokeName)
  // })

// init method to kick things off
pokedexApp.init = function () {
  console.log("init success");
  pokedexApp.getGen1Pokemon();
};

pokedexApp.init();

//  Landing page with heading pokedexApp

// An input form that allows users to choose pokemon from generation 1 by their Name from a dropdown list
// Once user chooses pokemon from dropdown list, user submits it (eventListener)
// Method (getUserQuery) to update varaible (userQuery) based on the user input
// Store user input in (userQuery)

// Make AJAX request to retrieve information on Generation 1 pokemon
// Create a method (getPokemon) to grab only the first generation of pokemon (151)
// When successful, display results by appending the data to the details div
// If API call fails, display an error message

// based on user input, display the corresponding pokemon with the name or ID

//  pokemon details displayed will be name, id, sprite, and type.

// Psuedo for dropdown
//  Grab names of all pokemon through the API
//  Append these names into a div
//  Make it into a form where users can select what pokemon they want to choose
// when the user chooses, get their result (document.getElementByID)
// Using this, append it into the fetch link (https://pokeapi.co/api/v2/pokemon/{result of users selection})
// example would be pikachu -> https://pokeapi.co/api/v2/pokemon/{pikachu}

// Psuedo for displaying pokemon
// then using this fetch the new url of the api
// this would give us information of the said pokemon
// append specific data from the pokemon (id name sprite type) into something (ul or li)

// MY COMMENT