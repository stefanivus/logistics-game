import React from 'react';
import Home from './Logistics/home';
import { Provider } from 'react-redux';

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <Home />
      </Provider>
    );
  }
}
