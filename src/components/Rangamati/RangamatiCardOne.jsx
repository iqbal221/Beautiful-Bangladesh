import React from 'react'

const RangamatiCardOne = (props) => {
    return(
        <div className='row my-5 align-items-center '>

            <div className='col-sm-6 rangamatiCard'>
                <h3 className='text-center mb-4 text-primary fs-2 fw-bold'>{props.name}</h3>
                <p>{props.description}</p>
            </div>

            <div className='col-sm-6 mb-sm-0 mb-4 rangamatiCard  '>
                <img src={props.image} alt='...'/>
            </div>

            <hr className='mt-5 text-success'/>
            
        </div>
    );
}

export default RangamatiCardOne;