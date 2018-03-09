<<<<<<< HEAD
import React, {Component} from 'react';
import './KnowYourRights.css';
import {Grid, Col,Row} from 'react-flexbox-grid';

class KnowYourRights extends Component {
    render() {
        return(
            <div>
                   <header className="KnowYourRights-header">
                {"Just About Right"}
                </header>
                </div>
        );
    }
}
export default KnowYourRights;
=======
import React, { Component } from 'react';
import './general.css';
import './KnowYourRights.css';

class KnowYourRights extends Component {
  render() {
    return (
      <div>
        <button className="SiteButton">
          Legal Rights
        </button>
        <button className="SiteButton">
          Institutes Contact Information
        </button>
      </div>
    );
  }
}

export default KnowYourRights;
>>>>>>> 1632372f9d8ed60c93a58519e47970f390a195f1
