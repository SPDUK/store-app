import React, {Component} from 'react';

//css

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
      <h5> Scroll on the left and right panels </h5>
        <h5>Log in using Github or Twitter using OAuth or view someone elses's store which is saved into a firebase database</h5>
        <h5>If you are not the owner of the current store you are viewing then you will not be able to change the stock, just view what is placed into stock, add it to an order and it will calculate the cost </h5>
        <h5> You can use sample fish or create your own, instantly updating with React on every part of the website and the database. </h5>

        <a className="btn btn-outline-dark" href="https://github.com/SPDUK/store-app">Full code here</a>
      </div>
    );
  }
}

export default About;