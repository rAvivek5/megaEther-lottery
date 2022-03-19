import "./App.css";
import React from "react";
import web3 from "./web3";
import lottery from "./lottery";

class App extends React.Component {
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "0.011",
    message: "",
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager, players, balance });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transation success........" });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether"),
    });

    this.setState({ message: "You have been entered. Good Luck!" });
  };

  onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transation success........" });

    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });

    this.setState({ message: "A winner has been picked. Good Luck!" });
  };
  render() {
    // console.logo(web3.version);
    // web3.eth.getAccounts().then(console.log);
    return (
      <>
      <div className="App">
        <h2 className="title"> 🪙MegaEther Lottery🪙</h2>
        <img
          className="title__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1x2WyR0kHjDyXSQEgzBp8sbRe2MJJ66Yi07wI6X8Re-6Vrp4w0ByzVho4-D7r7gb6no&usqp=CAU"
        />
        <p>
          This contract is managed by <b>{this.state.manager}</b>
        </p>
        <p>
          There are currently <b>{this.state.players.length}</b> people
          enetered, in MegaEther lottery competion with SUM of{" "}
          <b>{web3.utils.fromWei(this.state.balance, "ether")} Ether!</b>
        </p>
        <hr className="hrstyle" />
        <p>
          Player entered are <b>{this.state.players[1]} </b>
        </p>
        <hr className="hrstyle" />
        <form onSubmit={this.onSubmit}>
          <h4>Wanna try your Luck?</h4>
          <div className="form">
            <label className="form__label">Enter Amount of ETHER</label>
            <input
              className="form__input"
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </div>
          <button className="form__button">Enter</button>
        </form>
        <hr className="hrstyle" />
        <h4>Ready to pick a Winner randomly</h4>
        <button className="form__button" onClick={this.onClick}>
          Pick a Winner
        </button>
        <hr className="hrstyle2"></hr>
        <h1>{this.state.message}</h1>
        <h className='bottom'>vivek__pundkar</h>
      </div>
        </>
    );
  }
}
export default App;
