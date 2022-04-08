// App object pokedexAppApp
const pokedexApp = {};

// Initalize preset data
// grabs all gen 1 pokemon
pokedexApp.getGen1Pokemon = function () {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151/";

  fetch(url)
    .then(function (results) {
      return results.json();
    })
    .then(function (jsonResults) {
      jsonResults.results.forEach(function (poke) {
        pokedexApp.pokeInfo(poke);

        // console.log(poke)
      })
    });
};
// Grabbing all gen 1 pokemon info
pokedexApp.pokeInfo = function (poke) {
  const pokeUrl = poke.url;
  fetch(pokeUrl)
    .then(results => results.json())
    .then(function (kantoData) {
      pokedexApp.displayPokemon(kantoData);
      pokedexApp.pokeDropbox(kantoData);
      // console.log(kantoData);
    })
}

// Appending pokemon names into dropbox
pokedexApp.pokeDropbox = function (kantoData) {
  const options = document.createElement('option')
  options.value = kantoData.name
  options.innerHTML = kantoData.name

  // console.log(options);
  document.querySelector("#pokeDropbox").appendChild(options);

}

// grabs single pokemon
pokedexApp.singleGen1Pokemon = function (query) {
  const url = new URL ("https://pokeapi.co/api/v2/pokemon/");

  url.search = new URLSearchParams({
    q: query,
  });
  fetch(url)
    .then(function (results) {
      return results.json();
    })
    .then(function (jsonResults) {
      // WE DONT WANT FOR EACH ONLY ONE RESULT
      jsonResults.results.forEach(function (poke) {
        // pokedexApp.pokeInfo2(poke);
        // console.log(poke)
      });
    });
};
// Getting only 1 pokemon's information
pokedexApp.pokeInfo2 = function (poke) {
  const pokeUrl = poke.url;
  fetch(pokeUrl)
    .then((results) => results.json())
    .then(function (kantoData) {
      // pokedexApp.displayPokemon(kantoData);
    });
};

// displaying pokemon details into div
pokedexApp.displayPokemon = function (kantoData) {
  const name = document.createElement('h2')
  name.innerHTML = kantoData.name;

  const type = document.createElement('p')
  type.innerText = kantoData.types[0].type.name

  // needs to add both types

  console.log(type)

  const images = document.createElement("img");
  images.src = kantoData.sprites.front_default;
  images.alt = kantoData.name;
  // console.log(images);
  // document.querySelector("#pokemon").appendChild(images);

  const div = document.createElement('div');
  div.classList.add('pokemonContainer');

  div.appendChild(name);
  div.appendChild(type);
  div.appendChild(images);

  document.querySelector("#pokemon").appendChild(div);
}


// Grabbing all gen 1 pokemon information
pokedexApp.getThePokemon = function (pokemonArray) {
  pokemonArray.results.forEach(function (pokemonObject) {
    console.log(pokemonObject);
    pokedexApp.getPokeNames(pokemonObject);
  });
};



// function to get user input
pokedexApp.getUserInput = function () {
  document.querySelector("#pokeDropbox").addEventListener("change", function () {
    const pokemon = this.value;
    // console.log(pokemon)
    pokedexApp.singleGen1Pokemon(pokemon);
  });

};


// init method to kick things off
pokedexApp.init = function () {
  console.log("init success");
  pokedexApp.getGen1Pokemon(pokemon);
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