import React, { Component } from 'react';

export default class Opponent extends Component {
  state = {};

  render() {
    const { opponent } = this.props;
    return (
      <>
        <h1>{opponent}</h1>
      </>
    );
  }
}
