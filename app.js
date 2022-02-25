const newRecipe = document.getElementById('new-recipe');
const youtubeVideo = document.getElementById('video');
const foodName = document.getElementById('food-item');
const ingredients = document.getElementById('ingredients');
const steps = document.getElementById('steps');
const foodImage = document.getElementById('food-pic');
const demo = document.getElementById('demo');

// object for each different food that contains all the information required//
let food = {
    foodImage: null,
    foodName: 'burger',
    ingredients: 'bun patty cheese meat',
    steps: 'here are the steps',
    youtubeVideo: 'button'
};

localStorage.setItem('food', JSON.stringify(food));


