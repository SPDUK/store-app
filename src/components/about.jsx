import React, {Component} from 'react';

//css

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
      <h5> Scroll on the left and right panels. After you log you should refresh the page and everything will work smoothly and instantly, this works fine on localhost but does not on github-pages for some reason </h5>
        <h5>Log in using Github or Twitter using OAuth to view your store which is saved into a firebase database</h5>
        <h5>If you are not the owner of the current store you are viewing then you must change to a different store </h5>
        <h5> You can use sample fish which pulls from a file or create your own, instantly updating with React on every part of the website and the database. </h5>


        <a className="btn btn-outline-dark" href="https://github.com/SPDUK/store-app">Full code here</a>
      </div>
    );
  }
}

export default About;