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
  // console.log(poke);
  const pokeUrl = poke.url;
  fetch(pokeUrl)
  .then(results => results.json())
  .then(function (kantoData) {
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
    document.querySelector("#poke-dropbox").appendChild(options);
    // pokedexApp.getUserInput();
  }









  // function to get user input
  pokedexApp.getUserInput = function () {
    document.querySelector("#poke-dropbox").addEventListener("change", function () {
      const pokemon = this.value;
      // console.log(pokemon)
      pokedexApp.singleGen1Pokemon(pokemon);
    });

  };

  // grabs single pokemon
  pokedexApp.singleGen1Pokemon = function (query) {
  const url = new URL (`https://pokeapi.co/api/v2/pokemon/${query}`);

  // Getting only 1 pokemon's information
  fetch(url)
    .then(function (results) {
      // console.log(results);
      return results.json();
    })
    .then(function (jsonResults) {
      // console.log(jsonResults);
      pokedexApp.displayPokemon(jsonResults);

    });
};

// displaying pokemon details into div
pokedexApp.displayPokemon = function (kantoData) {
  // Pokemon Name
  document.querySelector("#pokemon").innerHTML = "";
  const name = document.createElement('h2')
  name.innerHTML = kantoData.name;

  // Pokemon Type
  const type = document.createElement('p')
  let typeText = "";
  kantoData.types.forEach( (index) => {
    typeText = typeText.concat(index.type.name, " ");
  })
  type.innerText = typeText;

  // Pokemon ID
  const pokeId = document.createElement('p')
  const pokeIdNumber = kantoData.id.toString().padStart(3, '0');
  pokeId.innerText = `#${pokeIdNumber}`;

  const divId = document.createElement('div')
  divId.classList.add('poke-id')
  divId.appendChild(pokeId);

  // pokemon Image Sprites
  const images = document.createElement("img");
  images.src = kantoData.sprites.front_default;
  images.alt = kantoData.name;

  const divSprite = document.createElement('div')
  divSprite.classList.add('pokemon-sprite')
  divSprite.appendChild(images);
  // Pokemon Size
  const height = document.createElement('p')
  height.innerText = `HEIGHT: ${kantoData.height * 10}cm`;

  const weight = document.createElement("p");
  weight.innerText = `WEIGHT: ${kantoData.weight / 10}kg`



  const divSize = document.createElement('div')
  divSize.classList.add('pokemon-size')
  divSize.appendChild(height);
  divSize.appendChild(weight);


  // Creating Div and appending all Elements
  const div = document.createElement('div');
  div.classList.add('pokemon-content');

  div.appendChild(name);
  div.appendChild(type);
  div.appendChild(divSprite);
  div.appendChild(divId)
  div.appendChild(divSize)

  document.querySelector("#pokemon").appendChild(div);
}



// init method to kick things off
pokedexApp.init = function () {
  console.log("init success");

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