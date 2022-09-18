import React from 'react'

const ContactFormCard = (props) => {
    return(
        <div className='my-3'>
            <input type={props.type} name={props.name} placeholder={props.placeholder} className='form-control p-2' required />
        </div>
    )
}

export default ContactFormCard;