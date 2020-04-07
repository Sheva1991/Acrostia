import React from 'react'
import './EmployeeСard-module.scss'

const EmployeeСard = (props) => {
    return (
        <div className="EmployeeСard text-center">
            <div className="EmployeeСard-body">
                <div className='EmployeeСard-img-top d-flex justify-content-center align-items-center'>
                    <div className='EmployeeСard-img-wrap-outline'>
                        <div className='EmployeeСard-img-wrap'>
                            <div className='EmployeeСard-img'>
                                <svg className="EmployeeСard-svg" xmlns="http://www.w3.org/2000/svg" width="157" height="160" viewBox="0 0 157 160">
                                    <path id="User" className="cls-1" d="M653.886,2554.41c-5.458,0-4.618,2.45-7.557,2.87s0.6-1.18-8.222.5-11.93,13.05-12.35,17.26-0.524,16.05-.245,22.37c0.84,3.78-2.1,3.78-2.1,3.78-5.283-.34-2.907,16.17-2.907,16.17,0.759,4.07-.274,6.1,7.549,9.25,3.726,10.65,13.46,16.28,13.46,16.28s0.049,6.57.2,11.43c-0.8-.4,2.718,12.42-21.581,16.02s-28.953,11.49-33.534,15.88-4.4,25.7-4.4,25.7l156.822,0.09s-1.164-21.39-5.746-25.79-9.571-12.28-33.87-15.88c-23.624-3.43-19.739-16.07-19.907-16.83,0.044-1.91.3-10.04,0.3-10.04a41.662,41.662,0,0,0,11.975-17.18c5.863-3.71,8.1-4.23,9.066-8.5,0,0,1.725-16.68-3.811-16.6,0,0-2.625.85-1.784-2.94s0.559-15.63.139-19.84,0.213-16.24-8.6-17.93c-6.018-1.12-6.8-.01-9.742-0.43s-6.437-8.06-11.9-8.06Z" transform="translate(-582 -2552)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="EmployeeСard-title text-uppercase">{props.name}</h3>
                <p className="EmployeeСard-position">{props.position}</p>
                <ul className="socials">
                    <li className="social">
                        <a href="https://www.facebook.com/" className="social__link" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="social">
                        <a href="https://twitter.com/" className="social__link" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="social">
                        <a href="https://plus.google.com/" className="social__link" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li className="social">
                        <a href="https://www.linkedin.com/" className="social__link" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeСard