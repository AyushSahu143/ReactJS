/* ------Mini React of Mine------
This is how react render elements behing the scenes
*/
const mainContainer = document.getElementById('root')

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    child: 'Click me to visit Google.'
}

function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.child    
    for (let prop in reactElement.props) {
        if(prop === 'child') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
      mainContainer.appendChild(domElement)
}

customRender(reactElement, mainContainer)