import React from 'react'
import './Contacts-module.scss'
import bgImage from './img/contact-bg.png'
import map from './img/map.jpg'
import SectionTitle from '../Common/SectionTitle/SectionTitle'
import AdressMap from './Map/map'
import ReduxForm from './Form/form'
import showResults from './Form/FormControls/showResult'

let bg = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const Contacts = (props) => {
    return (
        <section className='contacts' style={bg} >
            <SectionTitle
                title={props.sectionTitle}
                text={props.sectionText}
            />
            <div className={`container contacts__description`}>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contactTitle text-left mb-3 text-center text-md-left">Address</div>
                        <div className="row">
                            <div className="col-sm-6 adress">
                                <div className="adress__title lightBlue h5 mb-2">Acrostia</div>
                                <p>Sevenoaks Rd <br />
Sevenoaks TN14 7HR, UK</p>
                                <div className="adress__contacts">
                                    <div className="row">
                                        <div className="col-2 col-sm-4">
                                            <ul className="list-unstyled">
                                                <li className="lightBlue">Phone:</li>
                                                <li className="lightBlue">Fax:</li>
                                                <li className="lightBlue">E-mail:</li>
                                                <li className="lightBlue">Skype:</li>
                                            </ul>
                                        </div>
                                        <div className="col-10 col-sm-8">
                                            <ul className="list-unstyled">
                                                <li><a className="text-white adress__link" href="tel:+44-556-555-555">+44 556  555 555</a> </li>
                                                <li><a className="text-white adress__link" href="tel:+44-556-555-555">+44 556  555 555</a></li>
                                                <li><a className="text-white adress__link underline" href="mailto:info@acrostia.com">info@acrostia.com</a></li>
                                                <li><a className="text-white adress__link" href="skype:Ac0stia?call">Ac0stia</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mx-auto map">
                                <img src={map} className='map__link' alt="map" data-toggle="modal" data-target=".bd-example-modal-xl" />
                                <div className="modal fade bd-example-modal-xl" id="bd-example-modal-xl" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <AdressMap />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="contactTitle text-left mb-3 text-center text-md-left">Ask a question</div>
                        <ReduxForm onSubmit={showResults} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contacts;