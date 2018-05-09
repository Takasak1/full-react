import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return (
         <div className="card-deck mt-4">
            { props.cards.map(card => <Card key={card.id} {...card} />)}
         </div>
        );
};

export default CardList;