import React, { useState } from "react";
import "./dashboard.css";
import NavBar from "../Components/NavBar";
import { ethers } from "ethers";

const Dashboard = () => {
  // meta mask connection code

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect wallet");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage(" Make metamask account");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanegd", chainChangedHandler);

  return (
    <>
      <NavBar />
      <div className="page-container">
        <div>
          <h2 className="Heading-claim">Claim Your Reward</h2>
          <p className="Sub-Heading-claim">
            Get the value for your recycled contribution instantly by connecting
            your wallet with the platform and entering the hash provided from
            the smart bin. We don’t force you but reward you for the kindness
            towards nature!
          </p>
          <input type="text" className="wallet-key" placeholder="0 ETH" />
        </div>
        <div className="seperator"></div>
        <div className="bank-board">
          <h3 className="balance-heading">Your Balance</h3>
          <p className="p-meta">
            Connect your metamask wallet to see your wallet details
          </p>
          <h4 className="address-heading">Address</h4>
          <p className="address">{defaultAccount}</p>
          <h4 className="address-heading">Your Balance</h4>
          <p className="address">{userBalance}</p>

          <button className="wallet-button" onClick={connectWalletHandler}>
            {" "}
            Connect your wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
