import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { browserHistory } from 'react-router'
//css
import '../styles/landingpage.css';
//helper
var h = require('../scripts/helpers');

//variables
let storeId = null;



class Landing extends Component {
constructor(props){
  super(props);
  this.goToStore = this.goToStore.bind(this);
}




goToStore(event, props){
  event.preventDefault();
  var storeID = storeId.value;
  this.props.history.push('/store/' + storeID);
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

export default withRouter(Landing);
