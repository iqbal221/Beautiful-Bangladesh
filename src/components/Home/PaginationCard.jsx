import React from 'react'
import { NavLink } from 'react-router-dom';

const Pagination = (props) => {
    return(
        <div>
            <ul className="pagination justify-content-center">
                <li className="page-item "><NavLink className="page-link border-secondary text-primary" to={props.linkPrevious}>Previous</NavLink></li>
                <li className="page-item"><NavLink className="page-link border-secondary text-primary" to={props.link1}>1</NavLink></li>
                <li className="page-item "><NavLink className="page-link border-secondary text-primary" to={props.link2}>2</NavLink></li>
                <li className="page-item"><NavLink className="page-link border-secondary text-primary" to={props.link3}>3</NavLink></li>
                <li className="page-item"><NavLink className="page-link border-secondary text-primary" to={props.link4}>4</NavLink></li>
                <li className="page-item"><NavLink className="page-link border-secondary text-primary" to={props.linkNext}>Next</NavLink></li>
            </ul>
        </div>
    )
}

export default Pagination;