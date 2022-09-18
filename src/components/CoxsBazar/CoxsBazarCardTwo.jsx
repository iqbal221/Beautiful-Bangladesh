import React from 'react'

const CoxsBazarCardTwo = (props) => {
    return(
        <div className='row my-5  align-items-center'>
            
            <div className='col-sm-6 coxsBazarCard '>
                <h3 className='text-center mb-4 text-primary fs-2 fw-bold coxsBazarCard'>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            
             <div className='col-sm-6 mb-sm-0 mb-4 coxsBazarCard '>
                <img src={props.image} alt='...'/>
            </div>
            
            
            <hr className='mt-5  text-success'/>
        </div>
    );
}

export default CoxsBazarCardTwo;