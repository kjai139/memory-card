import logo from './logo.svg';
import './App.css';
import { Cards } from './Components/Cards';
import useSound from 'use-sound';
import pbgm from "./Components/sounds/bgm.mp3"
import { useState } from 'react';
import { render } from '@testing-library/react';



function App() {

  const [playBgm, {sound}] = useSound(
    pbgm, 
    {onend: () => {
      console.log('sound ended')
      console.log(isRunning)
      
    }},
    
    
  )

  const [isRunning, setIsRunning] = useState(true)

  
  
  const startGame = (e) => {
    let overlay = e.target.parentNode.parentNode
    overlay.remove()
    
    sound.volume(0.1)
    // sound.loop(true)
    
    // playBgm()
  }

  
  const showoverLay = () => {
    return (
      <div className='overlayMenuDiv'>
          <p className='overlayTitle'>Pokemon Memory Card Game</p>
          <button className='overlayBtn' onClick={startGame}>Start Game</button>
        </div>
  )}

  return (
    <div className="App">
     
      <div className='overlay'>
        {showoverLay()}
      </div>
      < Cards dataParentToChildren = {isRunning}/>
    </div>
  );
}

export default App;
