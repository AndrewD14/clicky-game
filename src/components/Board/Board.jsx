import React, { Component } from "react";
import Card from '../Card';
import cardProps from '../../cardProps.json';

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

const directionStyle = {
    color: "white",
    fontSize: "20px"
}

class Board extends Component {
  // Setting the component's initial state
  state = {
    curCount: 0,
    highCount: 0,
    guessed: [],
    cards: cardProps.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]),
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

      values.cards = values.cards.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

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
