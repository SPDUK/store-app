import React, {Component} from 'react';
import '../styles/fish.css'
var h = require ('../scripts/helpers');



class Fish extends Component {
constructor() {
  super()
  this.onButtonClick = this.onButtonClick.bind(this);
}
onButtonClick() {
this.props.addToOrder(this.props.index)
}
  render() {

      
  const isAvailable = (this.props.details.status === 'available' ? true : false);
  var buttonText = (isAvailable ? 'Add To Order' : 'Sold Out');
    return (
      <li className="fishlist">
          <img className="img-fluid" id="fishimg" src={this.props.details.image}alt={this.props.details.name}/>
          <h3 className="fishname">
            {this.props.details.name}
            </h3>
            <p className="fishprice">{h.formatPrice(this.props.details.price)}</p>
          <span>{this.props.details.desc}</span>
          <p></p>
          <button onClick={this.onButtonClick} className="btn btn-outline-dark" disabled={!isAvailable}>{buttonText}</button>

      </li>
    );
  }
}

export default Fish;
