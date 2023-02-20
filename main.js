var recipeInput = document.querySelector("add-recipe");

var addRecipeBtn = document.querySelector("button1");



// button.addEventListener("click", addRecipe);


var sideMealInput = document.querySelector("Side");
var mainDishMealInput = document.querySelector("Main Dish");
var dessertMealInput = document.querySelector("Dessert");
var entireMealMealInput = document.querySelector("Entire Meal");

var letsCookBtn = document.querySelector("lets-cook")
console.log("lets-cook")

letsCookBtn.addEventListener("click", letsCook);
function letsCook() {
var meal = letsCook.value
    heading.innerText = meal
    if (document.getElementById("Side").checked == true) {
        meal = side;
    }
    else if (document.getElementById("Main Dish").checked == true) {
        meal = mainDish;
    }
    else if (document.getElementById("Dessert").checked == true) {
        meal = dessert;
    }
    else (document.getElementById("Entire Meal").checked == true) 
        meal = entireMeal;
    
    hideCookpot();
}


function hideCookpot() {
    box2.classList.add('hidden')
}




