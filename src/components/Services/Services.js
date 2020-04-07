import React from 'react'
import './Services-module.scss'
import bgImage from './img/services-bg.png'
import SectionTitle from '../Common/SectionTitle/SectionTitle'
import Card from './Cards/Card'
import imgWand from './img/wand.svg'
import imgLightBall from './img/lightball.svg'
import imgGiars from './img/giars.svg'
import imgRocket from './img/rocket.svg'

let bg = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const Services = (props) => {
    return (
        <section className='services' style={bg} >
            <SectionTitle
                title={props.sectionTitle}
                subtitle={props.sectionSubTitle}
                text={props.sectionText}
            />
            <div className='container'>
                <div className="row">
                    <div className='col-lg-3 col-md-6 mb-3'><Card img={imgLightBall} cardTitle={'Researching'} cardText={'Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'} /></div>
                    <div className='col-lg-3 col-md-6 mb-3'> <Card img={imgWand} cardTitle={'DESIGN'} cardText={'Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'} /></div>
                    <div className='col-lg-3 col-md-6 mb-3'><Card img={imgGiars} cardTitle={'Development'} cardText={'Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'} /></div>
                    <div className='col-lg-3 col-md-6 mb-3'><Card img={imgRocket} cardTitle={'launch'} cardText={'Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'} /></div>
                </div>
            </div>
        </section >
    )
}

export default Services;