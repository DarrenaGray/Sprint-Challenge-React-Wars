import React from 'react';

const Character = props => {
    
    return (
     <div className="charContainer">
     {props.characters.map(character => {
        return(
             <div>
                <h2>{character.name}</h2>
                <p>{character.birth_year}</p>
            </div>
     )
    })}
    </div>
    );
}

export default Character;