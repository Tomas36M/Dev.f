import React from 'react';
import { UsePokemonContext } from '../context/pokeContext';

function CreateCards() {

    const context = UsePokemonContext();
    
    return (
        <div className="App">
            <div className='pokegallery'>
                {context.load ? (
                    <p>Loading...</p>
                ) : (
                    context.poke.map((img) => (
                        <div id={img.id} key={img.id}>
                            <div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9' }}>
                                <img src={img.sprites.front_default} alt='pokemon' />
                                <div >
                                    <h5 >{img.name}</h5>
                                    <h6>type: {img.types[0].type.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
export default CreateCards;