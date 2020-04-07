import React from 'react'
import './PortfolioItem-module.scss'

const PortfolioItem = (props) => {
    return (
        <div className="portfolioItem">
            <div className="portfolioItem__imgwrap">
                <img src={props.img} alt="foto" />
                <div className="portfolioItem__focus"><div className="zoom"><p>+</p></div></div>
            </div>
            <div className="portfolioItem__title">
                {props.title}
            </div>
        </div>
    )
}

export default PortfolioItem