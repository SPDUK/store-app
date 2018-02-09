import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="top">
          <h1>Catch of the Day</h1>
          <h4 className="tagline">{this.props.tagline}</h4>
        </div>
      </div>
    );
  }
}

export default Header;
