import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    players : [
      {name:'LYJ', score:10, id:1},
      {name:'LDK', score:20, id:2},
      {name:'KDK', score:30, id:3},
      {name:'BKY', score:40, id:4}
    ]
  }

  handleRemovePlayer = (id) => {
    console.log("handleRemovePlayer: ", id);

    this.setState( (prevState) => {
      // id를 제외한 상태를 업데이트한다.
      return{
        players:prevState.players.filter( (player) => player.id !== id)
      }
    })
  }

  render() {
    return (
        <div className="scoreboard">
          <Header title="Scoreboard" players={4}></Header>
          {
            this.state.players.map(player => {
              return (
                  <Player name={player.name} score={player.score} id={player.id} key={player.id}
                          removePlayer={this.handleRemovePlayer}/>
              );
            })
          }
        </div>
    );
  }
}

let Header = (header) => {
  console.log(header);
  return (
      <header className='header'>
        <h1 className='h1'>{header.title}</h1>
        <span className="stats">Players : {header.players}</span>
      </header>
  );
}

let Player = (props) => {
  console.log(props);
  return (
      <div className="player">
        <span className="player-name"><button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button></span>
        <span className="player-name">{props.name}</span>
        <Counter score={props.score}></Counter>
      </div>
  );
}

class Counter extends React.Component {


  state = {
    score: 10,
    a: 20
  }

  handlescore = (delta) => {
    console.log(this);

    this.setState(prevState => {
      return {
        score : prevState.score + delta
      }
    })

    console.log(this.state.score);

  }

  render() {
    return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => this.handlescore(-1)}> - </button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" onClick={() => this.handlescore(1)}> + </button>
        </div>
    )
  }

}

export default App;

