import React from 'react'

const Card = ({title, img}) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">Hola Mundo</p>
            </div>
        </div>
    )
}

export default Card
