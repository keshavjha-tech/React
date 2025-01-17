import { StrictMode } from 'react'
import { createRoot } from 'react-dom'

import App from './App.jsx'

function MyApp(){
  return(
    
    <>
  <h1> Custom App!</h1>
  </>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https//google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const createElement = React.createElement(
  'a',
  {href:  'https//google.com', target:'_blank'},
  'click me visit google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App/>
  </StrictMode>
)
