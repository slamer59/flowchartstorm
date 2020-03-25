import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flowchart from './storm-diagrams';
// import * as serviceWorker from './serviceWorker';

const flowchart = document.getElementById('flowchart');
// ReactDOM.render(
//   // <React.StrictMode>
//   <Flowchart />,
//   flowchart
//   // </React.StrictMode>,

// );

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Flowchart />, document.querySelector('#flowchart'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();