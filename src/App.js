import logo from './logo.svg';
import './App.css';
import { Cards } from './Components/Cards';

function App() {
  return (
    <div className="App">
      <div className='gameTitleDiv'>
      <div>

        
      <p className='gameTitle'>Memory Card Game</p>
      <p className='subGameTitle'>Get points by selecting cards only once</p>
      </div>
      <div>
        <p>Highest score: 0</p>
        <p>Scoreboard goes here</p>

      </div>
      </div>
      
      < Cards/>
    </div>
  );
}

export default App;
