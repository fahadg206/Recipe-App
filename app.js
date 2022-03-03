const newRecipe = document.getElementById('new-recipe');
const youtubeVideo = document.getElementById('video');
const foodName = document.getElementById('food-item');
const ingredients = document.getElementById('ingredients');
const steps = document.getElementById('steps');
const foodImage = document.getElementById('food-pic');
const demo = document.getElementById('demo');



async function randomRecipe() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const randomMeal = await response.json();
    console.log(randomMeal);
    foodImage.src = randomMeal.meals[0].strMealThumb;
    foodName.innerHTML = "Food: " + randomMeal.meals[0].strMeal;
    steps.innerHTML = "Steps: " + randomMeal.meals[0].strInstructions;
    //console.log(randomMeal.meals[0].strYoutube)//
    youtubeVideo.href = randomMeal.meals[0].strYoutube;
    let ingredientString = '';
    for (const [key, value] of Object.entries(randomMeal.meals[0])) {
        String(key);
        if(key.includes('strIngredient') && !(value === '') && !(value === null)) {
            ingredientString += value + ', ' ;
           // console.log(ingredientString)
        }
    }
    ingredients.innerHTML = "Ingredients: " + ingredientString.slice(0, ingredientString.length -2);
    console.log(ingredientString.charAt(ingredientString.length -2))
    // object for each different food that contains all the information required//
    let food = {
        foodImage: foodImage.src,
        foodName: foodName.innerHTML,
        ingredients: ingredients.innerHTML,
        steps: steps.innerHTML,
        youtubeVideo: youtubeVideo.href,
    };

    //console.log(food)
    //Set to local storage//
    localStorage.setItem('food', JSON.stringify(food));
    
    let getFood = JSON.parse(localStorage.getItem('todo'))
    
}

//New Recipe Button //
newRecipe.addEventListener('click', () => {
    randomRecipe();
    
})

