function customRender(reactElement, container){
  /*const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('target',reactElement.props.target)

  container.appendChild(domElement)
  */

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
  }

  container.appendChild(domElement)
}



const reactElement  = {
  type:'a',  // any type element and props can be considered
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children:'Click here to visit google'
}



const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)