import React from 'react'
import Card from './Card'
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'


const cards =[
    {
        id: 1,
        title: "Dia de Muertos",
        img: {image1}
    },
    {
        id: 2,
        title: "Jhonny Cupcakes",
        img: {image2}
    },
    {
        id: 3,
        title: "Checo Perez",
        img: {image3}
    }
]

const Cards = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => {
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} img={card.img}/>
                        </div>
                    }
                }
            </div>
        </div>
    )
}

export default Cards
