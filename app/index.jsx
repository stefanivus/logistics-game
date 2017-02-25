import React from 'react';
import { render } from 'react-dom';
import Application from './application';

// All store creation specific code is located in ./create-store.js
import createStore from './create-store';

const store = createStore();

render(
    <Application store={store} />,
    document.getElementById('root')
);
