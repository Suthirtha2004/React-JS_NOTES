import { StrictMode, createElement } from 'react' // Note new changes in react not in video
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1> Custom App</h1>
    </div>
  )
}

// const reactElement = { 
//     type : 'a',
//     props : { 
//         href : 'https://www.google.com',
//         target : '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit Google</a>
)

const anotherVar = "Knight";
 
const reactElement = createElement(
  'a',
  {href : 'https://www.google.com' ,target: '_blank'},
  'click me to visit google' ,
   anotherVar

)

createRoot(document.getElementById('root')).render(
    reactElement

)
