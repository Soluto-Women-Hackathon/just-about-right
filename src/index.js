import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import GetHelp from './GetHelp';
import LegalHelp from './LegalHelp';
import HomePage from './HomePage';
import KnowYourRights from './KnowYourRights';

ReactDOM.render(<LegalHelp />, document.getElementById('root'));
registerServiceWorker();
