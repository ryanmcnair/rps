import React from 'react';
import './App.scss';
import item from '../data/functions';
import Player from '../components/Player';
import Opponent from '../components/Opponent';
import Scorecard from '../components/Scorecard';

class App extends React.Component {
  state = {
    player: '',
    opponent: '',
    playerScore: 0,
    opponentScore: 0,
    winner: '',
    key: 1,
    key2: 2,
    key3: 3,
  };

  selectObject = (choice) => {
    this.setState({
      player: choice,
      winner: '',
      opponent: '',
    });
  };

  randomObject = () => {
    this.setState({
      opponent: item.weapons[Math.floor(Math.random() * item.weapons.length)],
    });
  };

  resetScores = () => {
    this.setState({
      playerScore: 0,
      opponentScore: 0,
      player: '',
      opponent: '',
      winner: '',
    });
  }

  gamePlay = () => {
    const { player, opponent } = this.state;

    if (player === '' || opponent === '') {
      // eslint-disable-next-line no-console
      console.log('Thanks for playing');
    } else if (player === opponent) {
      this.setState({ winner: 'Tie game' });
    } else if (
      (player === 'ROCK' && opponent === 'SCISSORS')
      || (player === 'SCISSORS' && opponent === 'PAPER')
      || (player === 'PAPER' && opponent === 'ROCK')
    ) {
      this.setState({ winner: 'You win' });
      this.setState((prevState) => ({
        playerScore: prevState.playerScore + 1,
      }));
    } else if (
      (opponent === 'ROCK' && player === 'SCISSORS')
      || (opponent === 'SCISSORS' && player === 'PAPER')
      || (opponent === 'PAPER' && player === 'ROCK')
    ) {
      this.setState({ winner: 'Opponent wins' });
      this.setState((prevState) => ({
        opponentScore: prevState.opponentScore + 1,
      }));
    }
  };

  functionCallback = () => {
    this.randomObject();
    setTimeout(() => {
      this.gamePlay();
    }, 100);
  }

  render() {
    return (
      <div className='App'>
        <h2>Rock Paper Scissors </h2>
        <div className='buttons'>
          <div className='reset-button'>
            <button
              className='btn btn-warning'
              onClick={() => this.resetScores()}
            >
              Reset
            </button>
            </div>
          <div className='choice-buttons'>
            <button
              className='btn btn-danger'
              onClick={() => this.selectObject('ROCK')}
            >
              ✊
            </button>
            <button
              className='btn btn-danger paper-button'
              onClick={() => this.selectObject('PAPER')}
            >
              ✋
            </button>
            <button
              className='btn btn-danger'
              onClick={() => this.selectObject('SCISSORS')}
            >
              ✌
            </button>
          </div>
          <div className='play-button'>
            <button
              className='btn btn-success'
              onClick={() => this.functionCallback()}
            >
              Play
            </button>
          </div>
        </div>
        <Scorecard
          key={this.state.key3}
          playerScore={this.state.playerScore}
          opponentScore={this.state.opponentScore}
        />
        <div className='board'>
          <Player key={this.state.key} player={this.state.player} />
          <Opponent key={this.state.key2} opponent={this.state.opponent} />
        </div>
        <div className='results'>{this.state.winner}</div>
      </div>
    );
  }
}

export default App;
