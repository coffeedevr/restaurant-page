// module for creating divs and inserting elements
const Element = (() => {
  const insertToById = (parent, child) => {
    const parentNode = document.querySelector('#' + `${parent}`)
    parentNode.appendChild(child)
  }
  const insertToByClass = (parent, child) => {
    const parentNode = document.querySelector('.' + `${parent}`)
    parentNode.appendChild(child)
  }
  const createDiv = (className) => {
    const div = document.createElement('div')
    div.setAttribute('class', className)
    return div
  }
  const createImgById = (id, src) => {
    const element = document.createElement('img')
    element.setAttribute('id', id)
    element.src = src
    return element
  }
  const createImgByClass = (id, src) => {
    const element = document.createElement('img')
    element.setAttribute('class', id)
    element.src = src
    return element
  }
  const insertHtmlByClass = (className, text) => {
    const element = document.querySelector('.' + `${className}`)
    element.innerHTML = text
  }
  const removeByClass = (className) => {
    const element = document.querySelector('.' + `${className}`)
    element.remove()
  }
  return { createDiv, insertToById, insertToByClass, insertHtmlByClass, removeByClass, createImgById, createImgByClass }
})()

export { Element as default }
