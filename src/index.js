import React from 'react';
import ReactDOM from 'react-dom';

//AppRouter with the component
import AppRouter from './routes/AppRouter'

// import 'normalize.css/normalize.css';
import './styles/styles.scss';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(<AppRouter/>,document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
