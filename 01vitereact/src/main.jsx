import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function myApp(){
  return(
    <div>
      <h1>Custom app chai or code</h1>
    </div>
  )
}
// const reactElement = {
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
//this cannot work kyuki yha pr react ka render h to kisi ais objects jink aformat unknown h usko render nhi kr skta

const reactElement = React.createElement(
  'a',
  {href:'https://google.com'},
  'click me to visit',


)
ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
