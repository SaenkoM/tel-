import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
