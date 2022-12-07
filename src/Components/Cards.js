import React, { useState } from "react";
import * as pokemonCards from "./Card"


function Cards() {
    
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

    const addScore = (index) => {
        if (cards.alreadySelected.indexOf(index) !== -1) {

        }
    }

    const shuffleCards = (e) => {
        let shuffledSelection = cards.selection.map(value => ({value, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)

        // console.log(shuffledSelection)
        console.log(e.target.getAttribute('value'))
        setCards( (prevState) => {
            return {
                ...prevState,
                selection:shuffledSelection
            }
        })
    }

    const renderCards = () => {
        return cards.selection.map((value, key) =>
        <div value={value.index} key={`card-key-${key}`} className="cards" style={{
            backgroundImage:`url(${value.imgSrc})`}} onClick={shuffleCards}>
        </div>

        )
    }


    return (
    <div className="App">
      <div className='gameTitleDiv'>
        <div>

            
        <p className='gameTitle'>Memory Card Game</p>
        <p className='subGameTitle'>Get points by selecting cards only once</p>
        </div>
      <div>
        <p className="highScoreTxt">Highest score: 0</p>
        <p className="currentScoreTxt">Current Score: 0</p>

      </div>
      </div>
      
        <div className="cardGrid">
            {renderCards()}
        </div>
    </div>
        
    )
}

export {Cards}