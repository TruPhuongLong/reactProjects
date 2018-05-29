import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './views/main'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
//oke