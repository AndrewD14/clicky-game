import React, { Component } from "react";
import Card from '../Card';
import cardProps from '../../cardProps.json';

class Board extends Component {
  // Setting the component's initial state
  state = {
    curCount: 0,
    highCount: 0,
    guessed: [],
    cards: cardProps,
    correct: null
  };

  handleClick = (id) => {
      let {...values} = this.state;
    if(values.guessed.indexOf(id) !== -1){
        values.curCount = 0;
        values.guessed.splice(0);
        values.correct = false;
    }
    else{
        values.guessed.push(id);
        values.curCount++;
        values.correct = true;

        if(values.curCount > values.highCount)
            values.highCount = values.curCount;
    }

      this.setState({...values});
  }

  generateAlert = () =>{
        if(this.state.correct == null)
            return null;
        else if(this.state.correct)
            return <Alert type="success">You guessed correctly!!</Alert>
        else if(!this.state.correct)
            return <Alert type="danger">You guessed incorrectly.</Alert>
  }

  render() {
    return (
      <div>
        <div className="row">
            <h3>Current Count: {this.state.curCount}</h3>
            <h3>Highest Count: {this.state.highCount}</h3>
        </div>
        {this.generateAlert()}
        <div className="row justify-content-center">
            {this.state.cards.map((card, i) => {
                if(i % 3 === 0)
                    return <Card key={card.id} {...card} onClick={this.handleClick}/>;
                else
                    return null;
            })}
        </div>
        <div className="row justify-content-center">
            {this.state.cards.map((card, i) => {
                if(i % 3 === 1)
                    return <Card key={card.id} {...card} onClick={this.handleClick}/>;
                else
                    return null;
            })}
        </div>
        <div className="row justify-content-center">
            {this.state.cards.map((card, i) => {
                if(i % 3 === 2)
                    return <Card key={card.id} {...card} onClick={this.handleClick}/>;
                else
                    return null;
            })}
        </div>
      </div>
    );
  }
}

export default Board;
