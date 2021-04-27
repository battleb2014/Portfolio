import React from 'react';
import me from './me.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='wrap'>
        <h1 className='main'><span>&#x3C;</ span> Brandon May <span><span className='red'>&frasl;</span>&#x3E;</span></h1><br />
        <img src={me} alt='me' className='me' />
        <h1 className='main'>Front End <em className='red'>React </em>Developer</h1><br /><br />
        <h1 className='projects'>Projects</h1><br />
        <a href='#'><h2>React Form Validation</h2></a>
        <a href='https://html-tag-library.herokuapp.com/'><h2>Complete HTML tag library</h2></a>
        <a href='https://battleb2014.github.io/reactSocialCard/'><h2>React social card</h2></a>
      </div>
    </div>
  );
}

export default App;
