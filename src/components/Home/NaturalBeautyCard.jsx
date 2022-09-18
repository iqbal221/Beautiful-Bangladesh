import React from 'react'

const NaturalBeautyCard = (props) => {
    return(
        <div className="card mb-3 NatureCard" >
            <img src={props.image} className="card-img w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-center fw-bold text-success">{props.title}</h5>
            </div>
        </div>
    
    );
}

export default NaturalBeautyCard;