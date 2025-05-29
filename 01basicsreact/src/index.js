import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //A variable name root is made.React DOM is the React to be used in the website. Render the root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


