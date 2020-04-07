import React from 'react'
import './SectionTitle-module.scss'

const SectionTitle = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col text-center'>
                    <h2 className='section__title text-uppercase'>{props.title}</h2>
                    <span className='section__subtitle text-uppercase'>{props.subtitle}</span>
                    <p className='section__text'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;