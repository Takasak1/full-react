import React from 'react';

const Card = (props) => {
    return (
        <div className="card card-custom">
            <img width="75" className="card-img-top" src={ props.avatar_url } alt="card" />
            <div className="card-body">
                <h5 className="card-title">
                    { props.name }
                </h5>
                <p className="card-text" >{ props.company }</p>
            </div>
        </div>
    );
};

export default Card;