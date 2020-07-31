import React, { Component } from 'react';
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
  


class App extends Component {
  state = {
    players: [
      {
        name: "Will",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        id: 2,
        score: 0
      },
      {
        name: "Ashley",
        id: 3,
        score: 0
      },
      {
        name: "James",
        id: 4,
        score: 0
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  prevPlayerId = this.state.players.length;

  handleScoreChange = (index, delta) => {
      this.setState( prevState => ({
          score: prevState.players[index].score += delta
      }));
  }
  handleAddPlayer = (name) =>{
    this.setState(prevState => {
        return {
            players: [
                ...prevState.players,
                {
                    name: name,
                    score: 0,
                    id: this.prevPlayerId += 1
                }
            ]
        };
    });
  }


  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            id={player.id}
            score={player.score}
            index={index}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
