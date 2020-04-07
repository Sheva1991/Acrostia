import React from 'react'
import './About-module.scss'
import bgImage from './img/about-bg.png'
import SectionTitle from '../Common/SectionTitle/SectionTitle'
import EmployeeСard from './Cards/EmployeeСard'

let bg = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const About = (props) => {
    return (
        <section className='about' style={bg} >
            <SectionTitle
                title={props.sectionTitle}
                subtitle={props.sectionSubTitle}
                text={props.sectionText}
            />
            <div className="container text-center mt-4">
                <h3 className='d-inline-block about__title'>Meet the team</h3>
                <div className="row">
                    <div className='col-lg-3 col-sm-6 mb-3 d-flex justify-content-center'><EmployeeСard name={'Anton Petrov'} position={'General manager'} /></div>
                    <div className='col-lg-3 col-sm-6 mb-3 d-flex justify-content-center'> <EmployeeСard name={'Kirl DONCHEV'} position={'Design Master'} /></div>
                    <div className='col-lg-3 col-sm-6 mb-3 d-flex justify-content-center'><EmployeeСard name={'Ilian Bonev'} position={'Developer Ninja'} /></div>
                    <div className='col-lg-3 col-sm-6 mb-3 d-flex justify-content-center'><EmployeeСard name={'Doni Stamov'} position={'SEO guru'} /></div>
                </div>
            </div>
        </section >
    )
}

export default About;