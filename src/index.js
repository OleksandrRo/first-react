import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App'



function Button (props) {

function buttonOnClick(e) {
 if (e.target.style.backgroundColor === 'green') {e.target.style.backgroundColor = 'yellow'}
  
else {e.target.style.backgroundColor = 'green'}
}

  return(
  
        <button onClick={buttonOnClick} className='button'> {props.name} {props.emoji}</button>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
      <Button name = "Lion" emoji = "🦁"/>
      <Button name = "Tiger" emoji = "🐯"/>
      <Button name = "Dog" emoji = "🐩"/>
      <Button name = "Wolf" emoji = "🐺"/>
      <Button name = "Fox" emoji = "🦊"/>
      <Button name = "Raccoon" emoji = "🦝"/>

      <App placeholder="So" />
      
    </>
)







