import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Button(props) {

  let [ normalState, setNormalState ] = React.useState(true);

  function toggleState() {
    setNormalState( x => !x );
  }
  
  return (
    <button 
      style={ { backgroundColor: ( normalState ? 'inherit' : 'red' ) } }
      onClick={ toggleState }>
      {props.emoji} {props.name} {props.emoji}
    </button>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <Button name="Lion" emoji="🦁" />
    <Button name="Tiger" emoji="🐯" />
    <Button name="Dog" emoji="🐩" />
    <Button name="Wolf" emoji="🐺" />
    <Button name="Fox" emoji="🦊" />
    <Button name="Raccoon" emoji="🦝" />
  </>
)







