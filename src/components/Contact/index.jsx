import React from 'react'
import Pagination from '../Home/PaginationCard'
import HeadlineCard from '../Home/HeadlineCard'
import Header from '../Header'
import Footer from '../Footer'
import ContactCard from './ContactCard'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import ContactFormCard from './ContactFormCard'

const Contact = () => {
    return(
        <div className='body'>
            <Header />
            <div className='header-image'>Contact</div>
            <div className='mx-sm-5 mx-3'>
                <div className='row  my-5'>
                    <div className='col-sm-4  '>
                        <ContactCard title='Meet with us' text='Abdul Monafer Bari Bhatiari, Sitakund, Chattogram' icon={faLocationDot} />
                    </div>
                    
                    <div className='col-sm-4  '>
                        <ContactCard title='Email with us' text='zahediiuc221@gmail.com  tajiniiuc222@gmail.com' icon={faEnvelope} />
                    </div>

                    <div className='col-sm-4  '>
                        <ContactCard title='Phone with us' text='8801819832618 8801886132822' icon={faPhone}/>
                    </div>
                </div>
            </div>

            <div className='row mx-sm-5 mx-3'>
                <HeadlineCard text='Get in Touch'/>
                <div className='col-sm-7 mb-3 mx-auto text-center ' >
                    <ContactFormCard type='text' name='name' placeholder='Your Name'/>
                    <ContactFormCard type='email' name='email' placeholder='Your Email'/>
                    <ContactFormCard type='phone' name='phone' placeholder='Your Phone Number'/>
                    <textarea name='message' placeholder='Write Message' rows='6' className='form-control' required/>
                    <a className='btn btn-primary my-3  contact-btn'>SEND</a>
                </div> 
            </div>

            <div className='mt-5'>
                <Pagination  linkPrevious='/Dhaka' link1='/CoxsBazar' link2='/Rangamati' link3='/Sylhet' link4='/Dhaka' linkNext='/Contact'/>
            </div>

            <Footer />
        </div>
        
    )
}

export default Contact;