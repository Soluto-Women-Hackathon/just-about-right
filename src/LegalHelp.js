import React, {Component} from 'react';
import './LegalHelp.css';
import {Grid, Col,Row} from 'react-flexbox-grid';



class LegalHelp extends Component {

     
    goToUrl(link,e)  {
        window.location=link;
        e.preventDefault();
    }
    render() {
        
        const lawyers = [
            {"siteName": "Zari Hazan", "link":"http://www.zarihazan.com/en/service/asylum-seekers-refugees/" }, 
            {"siteName": "Hias", "link":"http://hias.org.il/english/"},
            {"siteName": "Dss Law", "link":"http://www.dss-law.co.il/contact.aspx?pid=707"},
            {"siteName": "Tal Shmueli", "link":"http://www.visa-israel.co.il/%d7%a6%d7%95%d7%a8-%d7%a7%d7%a9%d7%a8/"},
            {"siteName": "D.Angel Law", "link":"http://www.dangel-law.co.il/%D7%A6%D7%95%D7%A8%2D%D7%A7%D7%A9%D7%A8.html"}
        ];
        const lawyersButtons = lawyers.map((lawyer) => 
        <Row center="xs">
         <Col>   
        <button className="LegalHelp-button" onClick={()=>this.goToUrl(lawyer.link)}>{lawyer.siteName}</button>
        </Col>
        </Row>
        );
        const pStyling={"text-align":"center", "font-size":"35px", "padding":"60px"};
        return(
            <div className="LegalHelp">
            <header className="LegalHelp-header">
                {"Just About Right"}
                </header>
            <p style={pStyling}>A list of Lawyers who specialise in immigration and refugee laws:
                
                </p>
               
             <Grid>
                 {lawyersButtons}
             </Grid>

             <button className="LegalHelp-button">
             {"Back"}
             </button>
             </div>

        );

    }

}
export default LegalHelp;