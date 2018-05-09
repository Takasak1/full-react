import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';

class App extends Component {
  state = {
    cards: []
  };
  
  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };
  render() {
    return (
      <div className="App">
        <div className="mb-4">
          <Form onSubmit={this.addNewCard}/>
        </div>
        <div className="container-fluid">
          <CardList cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
