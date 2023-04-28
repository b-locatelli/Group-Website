var welcomePage = document.querySelector("#welcome-page");
var mealPage = document.querySelector("#meal-page");
var generateDrinkBtn = document.querySelector("#drink-generate");
var generateFoodBtn = document.querySelector("#food-generate")
var generateMealBtn = document.querySelector("#meal-generate")
var backToWelc = document.querySelector("#back-to-welcome");


// DRINK API 
function getApiDrink() {
  var drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  fetch(drinkUrl) 
    .then(async function (response) {
      // console.log(response);
      if (response.status === 200) {
        
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      console.log(data.drinks[0].strDrink);
      generateRandomDrink(data);    //1 made function to display data
    });
}

function generateRandomDrink(cocktail) {     // 2 start making function trnf data in cocktail arg
  let drink = document.querySelector('#drink'); // 3 grab the element to display in

  let drinkName = document.createElement('h2');  // 4 to display name
  drinkName.innerHTML = cocktail.drinks[0].strDrink; // 5 grab the name from response array
  drink.appendChild(drinkName); // 6 append to the display element/area

  let img = document.createElement('img'); // 7 to display image
  img.src = cocktail.drinks[0].strDrinkThumb; // 8 grab image from array
  drink.appendChild(img);// 9 append to display area

  for (let i = 1; i < 16; i++){ // 10 multiple ingredients therefore need loop to go thru them they start from 1 to 15
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
function getApiFood() {
  var foodUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
  fetch(foodUrl)
  .then(async function (response) {
    // console.log(response);
    if (response.status === 200) {
      
    }
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    console.log(data.meals[0].strMeal); 
    generateRandomFood(data);    //1 made function to display data
  });
}

function generateRandomFood(meal){     // 2 start making function trnf data in cocktail arg
  let food = document.querySelector('#food'); // 3 grab the element to display in

  let foodName = document.createElement('h2');  // 4 to display name
  foodName.innerHTML = meal.meals[0].strMeal; // 5 grab the name from response array
  food.appendChild(foodName); // 6 append to the display element/area

  let imgs = document.createElement('img'); // 7 to display image
  imgs.src = meal.meals[0].strMealThumb; // 8 grab image from array
  food.appendChild(imgs);// 9 append to display area

  for (let i = 1; i < 16; i++){ // 10 multiple ingredients therefore need loop to go thru them they start from 1 to 15
    // 14 since there were null entries and empty strings therefore to exclude them used IF
    if(meal.meals[0][`strIngredient${i}`] == null || ""){ 
      break;
    }
    let ingredient = document.createElement('li'); // 11 to put ingredients in a list
    ingredient.innerHTML = meal.meals[0][`strIngredient${i}`] + ' -> ' + meal.meals[0][`strMeasure${i}`]; // 12 to put ingredients and measures together directly from JSON array
    food.appendChild(ingredient);  // 13 append to display area
  }

  let instruction = document.createElement('p'); // 15 to have a placeholder for instruction 
  instruction.innerHTML = meal.meals[0].strInstructions; // 16 get instructions from data
  food.appendChild(instruction); //17 append to display area
}

// shows meal page and hides welcome page
generateMealBtn.addEventListener("click", function() {
  welcomePage.style.display = "none";
  mealPage.style.display = "block";
});

// when myMeal logo is clicked, it takes you back to the welcome page
backToWelc.addEventListener("click", function() {
welcomePage.style.display = "block";
mealPage.style.display = "none";
});

// these load a new drink or food individually when each button is clicked
generateMealBtn.addEventListener("click", function(){
  getApiDrink();
  getApiFood();
});
generateDrinkBtn.addEventListener("click", function(){
  getApiDrink()
});
generateFoodBtn.addEventListener("click", function(){
  getApiFood()
});

// DONE: ----------------------
// moved API url's into the functions (local v global variable error (CORS))
// made the buttons call the api func instead of random func bc it needs to be reloaded for new drink/food to appear
// made the generate buttons work
// added a back to welcome page function and organized but didn't change getApi's much


// NOT DONE: ------------------
// MVP ERROR: generateRandom functions simply add new recipe to the page rather than replacing old
// MVP FIX: when click button, replace old recipe with new

// js TODO: use local storage 
// maybe: add save function for favorite recipes. access in navbar or create sidebar linked in navbar myMeal

// css TODO: colors, recipes as columns, flex, button styling, remove style.css
// more TODO: add comments, READ.ME

// make interactive? use modals?