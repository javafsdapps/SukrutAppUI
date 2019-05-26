import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import App from './App';
import * as serviceWorker from './serviceWorker';

// Importing Ionic CSS
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

// Generate the store
const store = configureStore();

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
