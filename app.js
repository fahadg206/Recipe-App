const newRecipe = document.getElementById('new-recipe');
const youtubeVideo = document.getElementById('video');
const foodName = document.getElementById('food-item');
const ingredients = document.getElementById('ingredients');
const steps = document.getElementById('steps');
const foodImage = document.getElementById('food-pic');
const demo = document.getElementById('demo');

//grab local storage//
let getFood = JSON.parse(localStorage.getItem('food'))
console.log(getFood)

async function randomRecipe() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const randomMeal = await response.json();
    console.log(randomMeal);
    
    foodImage.src = randomMeal.meals[0].strMealThumb;
    foodName.innerHTML = "Food: " + randomMeal.meals[0].strMeal;
    steps.innerHTML = "Steps: " + randomMeal.meals[0].strInstructions;
    //console.log(randomMeal.meals[0].strYoutube)//
    youtubeVideo.href = randomMeal.meals[0].strYoutube;
    // created ingredient variable and set equal to empty string. Will use later//
    let ingredientString = '';
    //created variables that store new arrays for keys and values.
    let keys = Object.keys(randomMeal.meals[0])
    let values = Object.values(randomMeal.meals[0])
    // since keys and values array have same length, therefor I could use same index 
    //to access both arrays
    for(let i=0; i < values.length; i++) {
        if(keys[i].includes('strIngredient') && !(values[i] === '') && !(values[i] === null)) {
            ingredientString += values[i] + ', ' ;
            console.log(ingredientString)
        }
    }
    /* Added ingredients on top of eachother, otherwise it would replace itself
    with last ingredient. Also used the slice method to get rid of last comma.*/
    ingredients.innerHTML = "Ingredients: " + ingredientString.slice(0, ingredientString.length -2);
    ingredients.style.textTransform = "capitalize";
    // object for each different food that contains all the information required//
    let food = {
        foodImage: foodImage.src,
        foodName: foodName.innerHTML,
        ingredients: ingredients.innerHTML,
        steps: steps.innerHTML,
        youtubeVideo: youtubeVideo.href,
    };

    //Set to local storage//
    localStorage.setItem('food', JSON.stringify(food));

}

//New Recipe Button //
newRecipe.addEventListener('click', () => {
    //Call randomRecipe function//
    randomRecipe();
})

/*Checking to see if local storage exists, if it does call randomRecipe 
function*/
if(getFood) {
    randomRecipe();
    
}


// for (const [key, value] of Object.entries(randomMeal.meals[0])) {
//     /* turned key into string in attempt to search for "ingredient" key using 
//     the includes method.*/
//     String(key);
//     /* there were some ingredients that had an empty string and null as
//     values so I used the does not equal operator to eliminate those chances*/
//     if(key.includes('strIngredient') && !(value === '') && !(value === null)) {
//         ingredientString += value + ', ' ;
//        // console.log(ingredientString)
//     }
// }