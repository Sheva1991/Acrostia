import React from 'react'
import './Work-module.scss'
import bgImage from './img/work-bg.png'
import SectionTitle from '../Common/SectionTitle/SectionTitle'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import w1 from './img/w1.jpg'
import w2 from './img/w2.jpg'
import w3 from './img/w3.jpg'
import w4 from './img/w4.jpg'
import w5 from './img/w5.jpg'
import w6 from './img/w6.jpg'
import w7 from './img/w7.jpg'
import w8 from './img/w8.jpg'

let bg = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const Work = (props) => {
    return (
        <section className='work' style={bg} >
            <SectionTitle
                title={props.sectionTitle}
                text={props.sectionText}
            />
            <div className='container'>
                <div className='row work__nav'>
                    <div className="col-md-3 d-flex align-items-center justify-content-center justify-content-md-start m-0 mb-4 mb-md-0">
                        <h5 className='text-uppercase m-0'>Portfolio</h5>
                    </div>
                    <div className="col-md-9">
                        <ul className={`list-unstyled d-flex justify-content-center justify-content-md-end align-items-center m-0   text-white portfolioMenu`}>
                            <li className='portfolioMenu__item'>
                                <button id="allD" className='portfolioMenu__btn'>All</button>
                            </li>
                            <li className='portfolioMenu__item'>
                                <button id="photoD" className='portfolioMenu__btn'>Photography</button>
                            </li>
                            <li className='portfolioMenu__item'>
                                <button id="logoD" className='portfolioMenu__btn'>Logo design</button>
                            </li>
                            <li className='portfolioMenu__item'>
                                <button id="webD" className='portfolioMenu__btn'>Web design</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6"><PortfolioItem img={w1} title='Aenean a elit' /></div>
                    <div className="col-lg-3 col-md-6"><PortfolioItem img={w2} title='Aliquam ' /></div>
                    <div className="col-lg-3 col-md-6"><PortfolioItem img={w3} title='Suspendisse libero' /></div>
                    <div className="col-lg-3 col-md-6"><PortfolioItem img={w4} title='Maecenas fringilla' /></div>
                    <div className="col-lg-3 col-md-6"><PortfolioItem img={w5} title='Donec vehicula' /></div>
                    <div className="col-lg-3 col-md-6"><PortfolioItem img={w6} title='Ut et sapien' /></div>
                    <div className="col-lg-3 col-md-6"><PortfolioItem img={w7} title='quis malesuada' /></div>
                    <div className="col-lg-3 col-md-6"><PortfolioItem img={w8} title='Vestibulum ante' /></div>
                </div>
            </div>

        </section >
    )
}

export default Work;