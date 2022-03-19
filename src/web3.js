import Web3 from "web3";
// window.ethereum.request({ method: "eth_requestAccounts" });

const web3 = new Web3(window.web3.currentProvider);

export default web3;
