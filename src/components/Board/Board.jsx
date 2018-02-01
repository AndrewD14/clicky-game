//imports the React module
import React, { Component } from "react";

//imports the components
import Card from '../Card';
import Alert from '../Alert';

//imports the data for the JSON array
import cardProps from '../../cardProps.json';

//gets the css styles
import BoardStyles from './BoardCss';

//board component that displays the game and results and directions
class Board extends Component {
  // Setting the component's initial state
  state = {
    curCount: 0,
    highCount: 0,
    guessed: [],
    cards: cardProps.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]), //randoms the cards
    correct: null
  };

  handleClick = (id) => {
    //grabs the current state
    let {...values} = this.state;

    //checks if the guess was already clicked
    if(values.guessed.indexOf(id) !== -1){
        values.curCount = 0;
        values.guessed.splice(0);
        values.correct = false;
    }
    else{
        values.guessed.push(id);
        values.curCount++;
        values.correct = true;

        //replaces the highest counter if there is a new high number
        if(values.curCount > values.highCount)
            values.highCount = values.curCount;
    }

    //randoms the cards
    values.cards = values.cards.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

    //calls the react method to set the state and update the virtual DOM
    this.setState({...values});
  }

  //function to determine what alert should be displayed
  generateAlert = () =>{
        if(this.state.correct == null)
            return null;
        else if(this.state.correct)
            return <Alert type="success">You guessed correctly!!</Alert>
        else if(!this.state.correct)
            return <Alert type="danger">You guessed incorrectly.</Alert>
  }

  //check if the rows should shake
  shouldShake = () => {
      let value = "row justify-content-center";
      if(this.state.correct === null || this.state.correct)
        return value;
      else
        return value+" shake";
  }

  //react function to call the ReactDOM rendor
  render() {
    //returns the html elements to be rendor
    return (
      <div>
        <div className="row justify-content-center" style={BoardStyles.directionStyle}>
            Click on an image to start the counter. If you click on an image more than once, the game resets. Try to click all at least once before failing.
        </div>
        <div className="row">
            <h3 style={BoardStyles.counterStyle}>Current Count: {this.state.curCount}</h3>
            <h3 style={BoardStyles.counterStyle}>Highest Count: {this.state.highCount}</h3>
        </div>
        {this.generateAlert()}
        <div className={this.shouldShake()}>
            {this.state.cards.map((card, i) => {
                if(i % 3 === 0)
                    return <Card key={card.id} {...card} onClick={this.handleClick}/>;
                else
                    return null;
            })}
        </div>
        <div className={this.shouldShake()}>
            {this.state.cards.map((card, i) => {
                if(i % 3 === 1)
                    return <Card key={card.id} {...card} onClick={this.handleClick}/>;
                else
                    return null;
            })}
        </div>
        <div className={this.shouldShake()}>
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
