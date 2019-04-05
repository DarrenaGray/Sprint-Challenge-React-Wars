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
                <p><span className="list">Birth Year:</span> <span className="attributes">{character.birth_year}</span></p>
                <p><span className= "list">Height:</span> <span className="attributes">{character.height}</span></p>
                <p><span className="list">Gender:</span> <span className="attributes">{character.gender}</span></p>
            </div>
     )
    })}
    </div>
    </div>
    );
}

export default Character;