//imports the React module
import React, { Component } from "react";

//imports the components
import Card from '../Card';
import Alert from '../Alert';

//imports the data for the JSON array
import cardProps from '../../cardProps.json';

//style for the text for the counters
const counterStyle ={
    background: "url(http://apod.nasa.gov/apod/image/0603/coma_misti.jpg) -80px -80px",
    color: "red",
    webkitTextFillColor: "transparent",
    webkitBackgroundClip: "text",
    fontWeight: "bold",
    fontSize: "50px",
    fontFamily: "arial, helvetica",
    width: "600px",
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    webkitTextStroke: "0.5px red"
}

//style for the text for the directions
const directionStyle = {
    color: "white",
    fontSize: "20px"
}

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

  //react function to call the ReactDOM rendor
  render() {
    //returns the html elements to be rendor
    return (
      <div>
        <div className="row justify-content-center" style={directionStyle}>
            Click on an image to start the counter. If you click on an image more than once, the game resets. Try to click all at least once before failing.
        </div>
        <div className="row">
            <h3 style={counterStyle}>Current Count: {this.state.curCount}</h3>
            <h3 style={counterStyle}>Highest Count: {this.state.highCount}</h3>
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
