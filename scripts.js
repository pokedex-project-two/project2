// App object pokedexAppApp
const pokedexApp = {};

// Initalize preset data

pokedexApp.getGen1Pokemon = function (query) {
  const url = new URL("https://pokeapi.co/api/v2/pokemon?limit=151/");

  url.search = new URLSearchParams({
    q: query
  })

  fetch(url)
    .then(function (results) {
      return results.json();
    })
    .then(function (jsonResults) {
      jsonResults.results.forEach(function (kantoData) {
        pokedexApp.pokeDropbox(kantoData);
        // console.log(kantoData);
      })
        pokedexApp.pokeInfo(jsonResults);
    });
};

pokedexApp.pokeDropbox = function (kantoData) {
  const options = document.createElement('option');
  options.value = kantoData.name;
  options.innerHTML = kantoData.name;
  // console.log(options);
  document.querySelector("#pokeDropbox").appendChild(options);
}

pokedexApp.pokeInfo = function (poke) {
  const pokeUrl = poke.url;
  fetch(pokeUrl)
    .then(res => res.json())
    .then(function (kantoPics) {
      pokedexApp.displayPokemon(kantoPics);
      console.log(kantoPics);
    })
}

pokedexApp.displayPokemon = function (kantoPics) {
  const images = document.createElement("img");
  images.src = kantoPics.sprites.front_default;
  images.alt = kantoPics.name;
  // console.log(images);
  document.querySelector("#pokemon").appendChild(images);
}
pokedexApp.getUserInput = function () {
  document.querySelector("#pokeDropbox").addEventListener("change", function () {
    const pokemon = this.value;
    // console.log(pokemon)
    pokedexApp.getGen1Pokemon(poke);
  });
};



  // fetch(pokemon)
  // .then( function (results){
  //   return results.json();
  // }).then (function (pokeName){
  //   console.log(pokeName)
  // })

// init method to kick things off
pokedexApp.init = function () {
  pokedexApp.getGen1Pokemon();
  pokedexApp.getUserInput();
}

pokedexApp.init();

//  Landing page with heading pokedexApp

// testing 1232323

//  Landing page with heading Pokedex

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