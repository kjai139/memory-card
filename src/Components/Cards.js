import React, { useState } from "react";
import * as pokemonCards from "./Card"
import useSound from "use-sound";
import clickSound from "./sounds/clicksoundeffect.mp3"
import wrongSound from "./sounds/wrong.mp3"

function Cards({dataParentToChildren}) {
    
    const [cards, setCards] = useState({
        selection:[
            pokemonCards.Amoonguss,
            pokemonCards.Ariados,
            pokemonCards.Durant,
            pokemonCards.Foongus,
            pokemonCards.Grossifleur,
            pokemonCards.Lilligant,
            pokemonCards.Petilil,
            pokemonCards.Spinarak,
            pokemonCards.Sunflora,
            pokemonCards.Sunkern,
            pokemonCards.Venomoth,
            pokemonCards.Venonat,
            pokemonCards.Virizion,
            pokemonCards.Vulpix,
            pokemonCards.Ninetales,
            pokemonCards.Growlithe,
            pokemonCards.Arcanine,
            pokemonCards.Ponyta,
            pokemonCards.Rapidash,
            pokemonCards.Victini,
            pokemonCards.Fennekin,
            pokemonCards.Braixen,
            pokemonCards.Delphox,
            pokemonCards.Fletchinder


        ],
        alreadySelected:[],
        currentScore: 0,
        highScore: 0
    })

    const [playbackRate, setplayBackRate] = useState(1)

    const [playClickSound] = useSound(clickSound,
    {volume: 0.5,
    playbackRate,
    
    })

    const [playWrongSound] = useSound(wrongSound,
        {
            volume:0.5,
            playbackRate
        })

    const [isGameWon, setGameWon] = useState(false)

    const addScore = (index) => {

        let shuffledSelection = cards.selection.map(value => ({value, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)

        let newCurrentScore = cards.currentScore + 1

        if (newCurrentScore == 30) {
            setGameWon(true)
        } else {
            setCards( (prevState) => {
                return {
                    ...prevState,
                    selection:shuffledSelection,
                    currentScore: newCurrentScore,
                    alreadySelected: [...cards.alreadySelected, index]
                }
            })

        }
        
        
        
    }

    const shuffleCards = (e) => {
        let index = e.target.getAttribute('value')
        let shuffledSelection = cards.selection.map(value => ({value, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)

        

        if (cards.alreadySelected.indexOf(index) === -1){
            
            playClickSound()
            addScore(index)
        } else {
            playWrongSound()
            let newHighScore = cards.currentScore
            if (newHighScore > cards.highScore){
                setCards( (prevState) => {
                    return {
                        ...prevState,
                        selection:shuffledSelection,
                        currentScore: 0,
                        alreadySelected: [],
                        highScore: newHighScore

                    }
                })
            } else {
                setCards( (prevState) => {
                    return {
                        ...prevState,
                        selection:shuffledSelection,
                        currentScore:0,
                        alreadySelected:[]
                    }
                })
            }
            
        }
    }

    const renderCards = () => {
        return cards.selection.map((value, key) =>
        <div value={value.index} key={`card-key-${key}`} className="cards" style={{
            backgroundImage:`url(${value.imgSrc})`}} onClick={shuffleCards}>
        </div>

        )
    }

    const renderVictory = () => {
        
        if (isGameWon == true) {
            return (
                <div className='overlay hidden'>
              <p className='overlayTitle'>Congrats you won!</p>
              <button className="overlayBtn" onClick={newGame}>New game</button>
                </div>
            )
        } else {
            return (
                null
            )
        }
    }

    const newGame = (e) => {
        setCards( (prevState) => {
            return {
                ...prevState,
                alreadySelected: [],
                currentScore: 0,
                highScore: 0

            }
        })
        setGameWon(false)
    }
    
    const testWin = () => {
        setGameWon(true)
    }
    


    return (
    <div className="App">
      <div className='gameTitleDiv'>
        <div>
        {/* <button onClick={testWin}>Win button</button> */}
            
        <p className='gameTitle'>Pokemon Card Memory Game</p>
        <p className='subGameTitle'>Try to select all the pokemons only once</p>
        </div>
      <div className="scoreboardDiv">
        <p className="highScoreTxt">Highest score: {cards.highScore}</p>
        <p className="currentScoreTxt">Current Score: {cards.currentScore}</p>

      </div>
      </div>
      
        <div className="cardGrid">
            {renderCards()}
        </div>
        {renderVictory()}

        {console.log(dataParentToChildren)}
    </div>
        
    )
}

export {Cards}