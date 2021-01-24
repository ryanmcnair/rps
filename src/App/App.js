import React from 'react';
import './App.scss';
import item from '../data/functions';
import Player from '../components/Player';
import Opponent from '../components/Opponent';
import Scorecard from '../components/Scorecard';

class App extends React.Component {
  state ={
    player: '',
    opponent: '',
    playerScore: 0,
    opponentScore: 0,
    key: 1,
    key2: 2,
    key3: 3,
  }

  selectObject = (choice) => {
    this.setState({
      player: choice,
    });
  };

  randomObject = () => {
    this.setState({
      opponent: item.weapons[Math.floor(Math.random() * item.weapons.length)],
    });
  }

  render() {
    return (
      <div className='App'>
        <h2>Rock Paper Scissors </h2>
        <div className='buttons'>
          <div className='play-buttons'>
            <button
              className='btn btn-danger'
              onClick={() => this.selectObject('rock')}
            >
              ✊
            </button>
            <button
              className='btn btn-danger paper-button'
              onClick={() => this.selectObject('paper')}
            >
              ✋
            </button>
            <button
              className='btn btn-danger'
              onClick={() => this.selectObject('scissors')}
            >
              ✌
            </button>
          </div>
          <div className='random-button'>
            <button
              className='btn btn-success'
              onClick={() => this.randomObject()}
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
        <Player key={this.state.key} playerChoice={this.state.player} />
        <Opponent
          key={this.state.key2}
          opponentChoice={this.state.opponent}
        />
      </div>
    );
  }
}

export default App;
