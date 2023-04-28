var welcomePage = document.querySelector("#welcome-page");
var mealPage = document.querySelector("#meal-page");
var generateDrinkBtn = document.querySelector("#drink-generate");
var generateFoodBtn = document.querySelector("#food-generate")
var generateMealBtn = document.querySelector("#generate-btn")
var backToWelc = document.getElementById("back-to-welcome");

generateMealBtn.addEventListener("click", function () {
    welcomePage.style.display = "none";
    mealPage.style.display = "block";
});

backToWelc.addEventListener("click", function () {
  welcomePage.style.display = "block";
  mealPage.style.display = "none";
});

// DRINK API 
function getApiDrink() {
  var drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  fetch(drinkUrl)
    .then(async function (response) {
      console.log(response);
      if (response.status === 200) {
        
      }
      response.json()
        .then(function(data) {
          generateRandomDrink(data);         //1 made function to display data
        });
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
function getApiFood() {
  var foodUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
  fetch(foodUrl)
    .then(async function (response) {
      console.log(response);
      if (response.status === 200) {

      }
      response.json()
        .then(function(data) {
          generateRandomFood(data);         //1 made function to display data
        });
  });
}

function generateRandomFood(meal){     // 2 start making function trnf data in cocktail arg
  let food = document.querySelector('#food'); // 3 grab the element to display in

  let foodName= document.createElement('h2');  // 4 to display name
  foodName.innerHTML = meal.meals[0].strMeal; // 5 grab the name from response array

  food.appendChild(foodName); // 6 append to the display element/area

  let imgs = document.createElement('img'); // 7 to display image
  imgs.src = meal.meals[0].strMealThumb; // 8 grab image from array

  food.appendChild(imgs);// 9 append to display area

  for (let i=1; i<16; i++){ // 10 multiple ingredients therefore need loop to go thru them they start from 1 to 15
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

getApiDrink();
getApiFood();

function generateMeal() {
  getApiDrink();
  getApiFood();
}

generateMealBtn.addEventListener("click", generateMeal);
generateDrinkBtn.addEventListener("click", generateRandomDrink);
generateFoodBtn.addEventListener("click", generateRandomFood);