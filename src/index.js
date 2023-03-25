import './style.css'
import Home from './home.js'
import Menu from './menu.js'
import Element from './element.js'

const btnHome = document.querySelector('#btns-home')
btnHome.addEventListener('click', loadHome)
const btnMenu = document.querySelector('#btns-menu')
btnMenu.addEventListener('click', loadMenu)
const btnContacts = document.querySelector('#btns-contacts')
btnContacts.addEventListener('click', loadContacts)
const footerText = document.querySelector('#footer-text')
const year = new Date().getFullYear()
footerText.textContent = '© ' + year + footerText.textContent

function loadHome () {
  Element.removeByClass('content-body')
  Home()
}

function loadMenu () {
  Element.removeByClass('content-body')
  Menu()
}

function loadContacts () {

}

Home()
