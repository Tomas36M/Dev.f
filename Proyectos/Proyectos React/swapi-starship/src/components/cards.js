import React from 'react'

function CreateCards({ shipData }) {

    return (
        <div>
            <div className="App">
                <section className="cards-container">
                    <img src="https://starwars-visualguide.com/assets/img/starships/5.jpg" />
                    <div className="text-container">
                        <h2>{shipData.name}</h2>
                        <p>Model: {shipData.model}</p>
                        <p>Manufacturer: {shipData.manufacturer}</p>
                    </div>    
                </section>
            </div>
        </div>
    )
}

export default CreateCards;