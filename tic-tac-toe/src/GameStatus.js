import React from 'react/addons';

var GameStatus = React.createClass({

  render: function(){

    var newGame = this.props.newGame;

    if (this.props.winner != false){
      return (
        <div className="game-status">
            <span>
                {this.props.winner == 'naught' ? 'You win!' : 'Computer wins!'}
                <button onClick={newGame}>New Game</button>

            </span>
        </div>
      )
    }else {
      return (
          <div className="game-status"></div>
        )
    }
  }
});

module.exports = GameStatus;