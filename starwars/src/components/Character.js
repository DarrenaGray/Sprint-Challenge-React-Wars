import React from 'react';
import './StarWars.css'

const Character = props => {
    
    return (
     <div className="card-container">   
     <div className="char-card">
     {props.characters.map(character => {
        return(
             <div className="char-info">
                <h2>{character.name}</h2>
                <p>D.O.B: {character.birth_year}</p>
                <p>Height: {character.height}</p>
                <p>Home World: {character.homeworld}</p>
            </div>
     )
    })}
    </div>
    </div>
    );
}

export default Character;