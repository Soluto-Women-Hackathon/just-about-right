import React, {Component} from 'react';
import './HomePage.css';
import {Grid, Col,Row} from 'react-flexbox-grid';

class HomePage extends Component {
    render() {
        return(
            <div>
                   <header className="HomePage-header">
                {"Just About Right"}
                </header>
                 <Row center="xs">
                <Col>
                <button className="HomePage-button">
                {"Know Your Rights"}
                </button>
                </Col>
                <Col>
                <button className="HomePage-button">
                {"Get Help"}
                </button>
                </Col>               
                </Row>

                <button className="HomePage-button">
             {"Back"}
             </button>
                </div>
        );
    }
}
export default HomePage;