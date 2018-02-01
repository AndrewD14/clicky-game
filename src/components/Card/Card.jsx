//imports the React module
import React, { Component } from "react";

//gets the css
import CardStyle from './CardCss';

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
        <button id={this.state.id} onClick={() => this.state.onClick(this.state.id)} style={CardStyle.buttonStyle}>
          <div className="row">
            <div className="col">
              <img src={this.state.imgURL} style={CardStyle.imgStyle} alt=""/>
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
