
// App object pokedex
const pokedex = {};

// Initalize preset data

pokedex.ApiUrl = "https://pokeapi.co/api/v2/pokemon/";

fetch(pokedex.ApiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResults) {
    // console.log("It worked!", jsonResults); 
    pokedex.displayPokemon(jsonResults);
  });

pokedex.displayPokemon = function(data) {
  console.log(data);
  const ul = document.querySelector("ul");
}

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







