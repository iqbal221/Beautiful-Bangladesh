import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG,faFacebookF,faTwitter, faLinkedinIn, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='row mx-sm-4 mx-3 '>
                <div className='col-sm-5 about'>
                    <h4 className='text-center'>ABOUT US</h4>
                    <p>Nusaiba Travel is a trusted and reliable tour and travel agency amoung all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling.
                        Customer satisfaction is our first priority. Our tour team guide is very responsible and honest.
                    </p>
                </div>

                <div className='col-sm-3 ms-lg-5 ms-sm-0 ps-lg-5 ps-sm-0 menu'>
                    <h4>QUICK MENU</h4>
                    <div>
                        <p className='mb-2'>COMPANY OVERVIEW</p>
                        <p className='mb-2'>TOUR PACKAGES</p>
                        <p className='mb-2'>SPORTS PACKAGES</p>
                        <p>MESSAGE FROM CEO</p>
                    </div>
                </div>

                <div className='col-sm-3 ms-lg-5 ms-sm-0 ps-lg-5 ps-sm-0 social'>
                    <h4>SOCIAL LINK</h4>
                    <NavLink to='https://www.facebook.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='me-3 social-icon  me-3' icon={faFacebookF}></FontAwesomeIcon></NavLink>
                    <NavLink to='https://www.twitter.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='me-3 social-icon  me-3' icon={faTwitter}></FontAwesomeIcon></NavLink>
                    <NavLink to='https://www.LinkedIn.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='me-2 social-icon  me-3' icon={faLinkedinIn}></FontAwesomeIcon></NavLink>
                    <NavLink to='https://www.LinkedIn.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='me-2 social-icon ' icon={faGooglePlusG}></FontAwesomeIcon></NavLink>
                </div>
                <hr />
                <div className='copyright'>
                    <div className='px-lg-0 px-sm-5'>All Rights Reserved by Nusaiba Travel @ 2022</div>
                    <div>Design by Md Zahed Iqbal</div>
                </div>
            </div>
        </div>
        
    );
}

export default Footer;