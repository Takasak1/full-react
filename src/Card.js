import React from 'react';

const Card = (props) => {
    return (
          <div className="card">
            <img className="card-img-top" src={ props.avatar_url } alt="card" />
            <div className="card-block">
              <h5 className="card-title">
                { props.name }
              </h5>
              <p className="card-text" >{ props.company }</p>
            </div>
          </div>
    );
};

export default Card;