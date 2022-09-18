import React from 'react'

const HeadlineCard = (props) => {
    return(
        <div className='text-center py-3 text-primary fw-bold headline'>
            <h2>{props.text}</h2>
        </div>
    )
}

export default HeadlineCard;