import React, {Component} from 'react';

//css
import '../styles/landingpage.css';
//helper
var h = require('../scripts/helpers');

//variables
let storeId = null;



class Landing extends Component {

  goToStore(event) {
    event.preventDefault();
    //get the dtata from input
    // var StoreID = this.refs.storeId.value;
    console.log(storeId.value);
    //transition from Landing to Home
  }
  
  render() {
    return (
      <div id="landing">
        <div className="container-fluid">
          <div className="storesearch">
            <form className="store-selector" onSubmit={this.goToStore}>
              <input type="text" ref={(input) => { storeId = input }} defaultValue={h.getFunName()}/>
            <h3>
              Enter A Store Name
            </h3>
            <input type="submit" className="btn btn-secondary"/>
            </form>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
