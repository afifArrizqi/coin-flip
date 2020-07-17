import React, { Component } from "react";
import { choice } from "../helpers/choice";
import "./CoinContainer.css";

export class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: newCoin.side === "heads" ? st.nHeads + 1 : st.nHeads,
        nTails: newCoin.side === "tails" ? st.nTails + 1 : st.nTails,
      };
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's Flip A Coin!</h2>
        {this.state.currCoin ? (
          <img
            src={this.state.currCoin.imgSrc}
            alt={this.state.currCoin.side}
          />
        ) : null}
        <button onClick={this.handleClick}>Flip Coin</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
