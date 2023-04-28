var welcomePage = document.querySelector("#welcome-page");
var nextPage = document.querySelector("#next-page");
var searchButtonA = document.querySelector("#search-btn-init");

// searchAgain.addEventListener("click", function () {
//     welcomePage.style.display = "block";
//     nextPage.style.display = "none";
// });

// // this one doesn't quite work - only flashes
// searchButtonA.addEventListener("click", function() { 
//     welcomePage.style.display = "none";
//     nextPage.style.display = "block";
// }); 

// DRINK API 

var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(async function (response) {
      console.log(response);
      if (response.status === 200) {
        
      }
      return response.json()
      .then(function (data){
        //console.log(data);
        displayRandom(data);         //1 made function to display data
      });
  });
}

getApi(requestUrl);

function displayRandom(cocktail){     // 2 start making function trnf data in cocktail arg
  

  let drink = document.querySelector('#drink'); // 3 grab the element to display in

  let drinkName = document.createElement('h2');  // 4 to display name
  drinkName.innerHTML = cocktail.drinks[0].strDrink; // 5 grab the name from response array

  drink.appendChild(drinkName); // 6 append to the display element/area

  let img = document.createElement('img'); // 7 to display image
  img.src = cocktail.drinks[0].strDrinkThumb; // 8 grab image from array

  drink.appendChild(img);// 9 append to display area

  for (let i=1; i<16; i++){ // 10 multiple ingredients therefore need loop to go thru them they start from 1 to 15
      // 14 since there were null entries and empty strings therefore to exclude them used IF

    if(cocktail.drinks[0][`strIngredient${i}`] == null || ""){ 
      break;
    }
let ingredients = document.createElement('li'); // 11 to put ingredients in a list
   ingredients.innerHTML = cocktail.drinks[0][`strIngredient${i}`] + ' -> ' + cocktail.drinks[0][`strMeasure${i}`]; // 12 to put ingredients and measures together directly from JSON array
   drink.appendChild(ingredients);  // 13 append to display area

  }

  let inst = document.createElement('p'); // 15 to have a placeholder for instruction 
  inst.innerHTML = cocktail.drinks[0].strInstructions; // 16 get instructions from data

  drink.appendChild(inst); //17 append to display area

}

// FOOD API

var foodUrl = 'www.themealdb.com/api/json/v1/1/random.php';

function getApi(foodUrl) {
  fetch(foodUrl)
    .then(async function (response) {
      console.log(response);
      if (response.status === 200) {
        
      }
      return response.json()
      .then(function (data){
        //console.log(data);
        displayRandom(data);         //1 made function to display data
      });
  });
}

getApi(foodUrl);

function displayRandom(meal){     // 2 start making function trnf data in cocktail arg
  

  let drink = document.querySelector('#food'); // 3 grab the element to display in

  let drinkName = document.createElement('h2');  // 4 to display name
  drinkName.innerHTML = cocktail.drinks[0].strDrink; // 5 grab the name from response array

  drink.appendChild(drinkName); // 6 append to the display element/area

  let img = document.createElement('img'); // 7 to display image
  img.src = cocktail.drinks[0].strDrinkThumb; // 8 grab image from array

  drink.appendChild(img);// 9 append to display area

  for (let i=1; i<16; i++){ // 10 multiple ingredients therefore need loop to go thru them they start from 1 to 15
      // 14 since there were null entries and empty strings therefore to exclude them used IF

    if(cocktail.drinks[0][`strIngredient${i}`] == null || ""){ 
      break;
    }
let ingredients = document.createElement('li'); // 11 to put ingredients in a list
   ingredients.innerHTML = cocktail.drinks[0][`strIngredient${i}`] + ' -> ' + cocktail.drinks[0][`strMeasure${i}`]; // 12 to put ingredients and measures together directly from JSON array
   drink.appendChild(ingredients);  // 13 append to display area

  }

  let inst = document.createElement('p'); // 15 to have a placeholder for instruction 
  inst.innerHTML = cocktail.drinks[0].strInstructions; // 16 get instructions from data

  drink.appendChild(inst); //17 append to display area

}