import React, { Component } from 'react';

export default class Scorecard extends Component {
  state = {};

  render() {
    const { playerScore, opponentScore } = this.props;
    return (
      <>
        <div className='scores'>
          <div className='player-score'>
            <h2>Your score</h2>
            <h3>{playerScore}</h3>
          </div>
          <div className='opponent-score'>
            <h2>Opponent score</h2>
            <h3>{opponentScore}</h3>
          </div>
        </div>
      </>
    );
  }
}
