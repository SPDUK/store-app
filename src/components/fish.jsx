import React, {Component} from 'react';
import '../styles/fish.css'
var h = require ('../scripts/helpers');

class Fish extends Component {
  render() {
    return (
      <li className="fishlist">
        <div>
          <img className="img-fluid" id="fishimg" src={this.props.details.image}alt={this.props.details.name}/>
        </div>
        <div>
          <h3 className="fishname">
            {this.props.details.name}
            </h3>
            <p className="fishprice">{h.formatPrice(this.props.details.price)}</p>
          <span>{this.props.details.desc}</span>
        </div>
      </li>
    );
  }
}

export default Fish;
