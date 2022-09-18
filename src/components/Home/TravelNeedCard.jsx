import React from 'react'

const TravelNeedCard = (props) => {
    return(
        <div className="card mb-3 TravelCard" >
            <img src={props.image} className="card-img-top w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title fw-bold text-success">{props.title}</h5>
                <p className="card-text text-secondary ">{props.text}</p>
            </div>
        </div>
    
    );
}

export default TravelNeedCard;