import React, { Component } from 'react';

export default class Player extends Component {
  state = {}

  render() {
    const { player } = this.props;
    return (
      <>
        <h1>{player}</h1>
      </>
    );
  }
}
