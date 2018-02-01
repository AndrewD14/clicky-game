//imports the React module
import React, { Component } from "react";

//custom style for the various images in the buttons
const imgStyle = {
  maxWidth: "140px",
  maxHeight: "160px",
  margin: 0
};

//custom style for the buttons that are click
const buttonStyle = {
    background: "url(http://apod.nasa.gov/apod/image/0603/coma_misti.jpg) -80px -80px",
    color: "green",
    WebkitBackgroundClip: "button",
    fontWeight: "bold",
    fontFamily: "arial, helvetica",
    fontSize: "20px",
    width: "180px",
    height: "200px"
}

//react component for each card that is for the game
class Card extends Component {
  state = {
    id: "",
    name: "",
    onClick: "",
    imgUrl: ""
  };

  //populates the constructor for the component
  constructor(prop){
    super(prop);
    this.state = prop;
  }

  //triggers the ReactDOM rendor function
  render() {
    //returns the html element for each button that is the card for the game
    return (
      <div className="col-2">
        <button id={this.state.id} onClick={() => this.state.onClick(this.state.id)} style={buttonStyle}>
          <div className="row">
            <div className="col">
              <img src={this.state.imgURL} style={imgStyle} alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {this.state.name}
            </div>
          </div>
        </button>
      </div>
    );
  }
}

export default Card;
