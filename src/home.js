import Element from './element.js'
import LettuceHome from './assets/lettuce-home.jpeg'
import Map from './assets/home_map.png'

function Home () {
  Element.insertToById('content', Element.createDiv('content-body'))
  Element.insertToByClass('content-body', Element.createDiv('home-intro'))
  Element.insertToByClass('content-body', Element.createDiv('home-intro-text-wrapper'))
  Element.insertToByClass('home-intro-text-wrapper', Element.createDiv('home-intro-img-wrapper'))
  Element.insertToByClass('home-intro-img-wrapper', Element.createImgById('home-intro-img', LettuceHome))
  Element.insertToByClass('home-intro-text-wrapper', Element.createDiv('home-intro-text'))
  Element.insertToByClass('content-body', Element.createDiv('home-about'))

  const intro = '<h1>Welcome to Lettuce Eat!</h1><br><p>An All-You-Can-Eat Buffet with only dishes of lettuce!</p>'
  const introText = '<h2>Home of the best lettuce dishes!</h2><br><p>Each dish is cooked and made with lettuce and love that will sure satisfy you up!</p><p><br>Lettuce Eat guarantees that we have all your cravings!<p>'
  const text = '<h1>Location</h1><p>3rd St., Boulevard Rd., Town City, Cantry</p>'

  Element.insertHtmlByClass('home-intro', intro)
  Element.insertHtmlByClass('home-intro-text', introText)
  Element.insertHtmlByClass('home-about', text)
  Element.insertToByClass('home-about', Element.createImgById('home-map-img', Map))
}

export { Home as default }
