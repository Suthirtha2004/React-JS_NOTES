function customRender(reactElement,container){
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement);*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop , reactElement.props[prop]);
    }

    container.appendChild(domElement);


} //This render function takes a react element and injects it into a container


const reactElement = { //how does React see the element and do with the element and how it displays it - It takes it as a form of tree
    type : 'a',
    props : { //props is an object
        href : 'https://www.google.com',
        target : '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

//we want to inject elements into root or somewhere else

customRender(reactElement,mainContainer)
