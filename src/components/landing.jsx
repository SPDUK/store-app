import React, {Component} from 'react';

//css
import '../styles/landingpage.css';

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="container-fluid">
          <div className="storesearch">
            <form>
              <input type="text" placeholder="example: My cool store!"/>
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
