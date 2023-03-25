import Element from './element.js'
import RecipeOne from './assets/recipes/1.jpg'
import RecipeTwo from './assets/recipes/2.jpg'
import RecipeThree from './assets/recipes/3.jpg'
import RecipeFour from './assets/recipes/4.jpg'
import RecipeFive from './assets/recipes/5.jpg'
import RecipeSix from './assets/recipes/6.jpg'
import RecipeSeven from './assets/recipes/7.jpg'
import RecipeEight from './assets/recipes/8.jpg'

function Menu () {
  const intro = '<h1>Menu</h1><br><p>Listed below are all of our Lettuce Specials!</p>'
  const imgArr = [RecipeOne, RecipeTwo, RecipeThree, RecipeFour, RecipeFive, RecipeSix, RecipeSeven, RecipeEight]
  const recipeNameArr = ['Quick Nicoise Salad', 'Warm Rice & Pintos Salad', 'Mexican Layered Salad',
    'Strawberry Salad with Poppy Seed Dressing', 'Hoisin Meatball Lettuce Wraps',
    'Tropical Layered Chicken Salad', 'Shrimp & Avocado Salads', 'Turkey Salad on Wheat Bread']
  Element.insertToById('content', Element.createDiv('content-body'))
  Element.insertToByClass('content-body', Element.createDiv('home-intro'))
  Element.insertToByClass('content-body', Element.createDiv('recipe-list'))
  Element.insertHtmlByClass('home-intro', intro)

  for (let i = 0; i <= 4; i++) {
    const text = '<h2>' + recipeNameArr[i]
    const textTwo = '<h2>' + recipeNameArr[i + 1]
    Element.insertToByClass('recipe-list', Element.createDiv('recipe-row c' + i))

    Element.insertToByClass('c' + i, Element.createDiv('recipe-card a' + i))
    Element.insertToByClass('a' + i, Element.createDiv('recipe-name b' + i))
    Element.insertHtmlByClass('b' + i, text)
    Element.insertToByClass('a' + i, Element.createImgByClass('recipe-img img' + i, imgArr[i]))
    Element.insertToByClass('c' + i, Element.createDiv('recipe-card a' + (i + 1)))
    Element.insertToByClass('a' + (i + 1), Element.createDiv('recipe-name b' + (i + 1)))
    Element.insertHtmlByClass('b' + (i + 1), textTwo)
    Element.insertToByClass('a' + (i + 1), Element.createImgByClass('recipe-img img' + (i + 1), imgArr[(i + 1)]))
    i++
  }
}

export { Menu as default }
