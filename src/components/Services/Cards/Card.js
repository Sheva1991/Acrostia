import React from 'react'
import './Card-module.scss'

const Card = (props) => {
    return (
        <div className="card text-center">
            <div className="card-body">
                <div className='card-img-top d-flex justify-content-center align-items-center'>
                    <div className='card-img-wrap-outline'>
                        <div className='card-img-wrap'>
                            <img src={props.img} className="card-img" alt="foto" />
                        </div>
                    </div>
                </div>
                <h3 className="card-title text-uppercase">{props.cardTitle}</h3>
                <p className="card-text">{props.cardText}</p>
            </div>
        </div>
    )
}

export default Card