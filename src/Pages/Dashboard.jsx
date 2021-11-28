import React, { useState, useEffect } from "react";
import "../styles/dashboard.css";
import NavBar from "../Components/NavBar";
import { ethers } from "ethers";
import axios from "axios";
import plastic from "../assets/plastic.jpg";
import metal from "../assets/metal.jpg";
import paper from "../assets/paper.jpg";
import glass from "../assets/glass.jpg";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    await axios.post(process.env.REACT_APP_BACKEND_URL + "/send", {
      address: addr,
      amount: ether,
    });

    console.log({ ether, addr });
  } catch (err) {
    setError(err.message);
  }
};

const Dashboard = () => {
  // meta mask connection code

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect wallet");
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [amount, setAmount] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BACKEND_URL);
      } catch (error) {
        console.error("heroku error");
      }
    })();
  }, []);

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
    setConnButtonText("Update amount");
  };

  const getUserBalance = (address) => {
    if (!window.ethereum) return;

    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  const setNewAmount = () => {
    setAmount(count);
  };

  useEffect(() => {
    if (!window.ethereum) return;

    window.ethereum?.on("accountsChanged", accountChangedHandler);

    window.ethereum?.on("chainChanegd", chainChangedHandler);

    return () => {
      if (!window.ethereum) return;
      window.ethereum?.removeListener("accountsChanged", accountChangedHandler);

      window.ethereum?.removeListener("chainChanegd", chainChangedHandler);
    };
  }, [window.ethereum]);

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
          <div className="claim-div">
            <div className="input-value">{count} ETH</div>

            {/* <input
            type="text"
            className="wallet-key"
            placeholder={count + " ETH"}
            onChange={(e) => setAmount(e.target.value)}
          /> */}

            <button
              type="submit"
              className="claim-button"
              onClick={() => {
                startPayment({ ether: count, addr: defaultAccount });
                setCount(0);
              }}
            >
              Claim
            </button>
          </div>
          <p className="counter-heading">
            Select the amount you contributed in the smart bin
          </p>
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
            {connButtonText}
          </button>
        </div>
      </div>

      <div className="counter-btn-holder">
        <div className="counter-holder">
          <div className="counter-container">
            <img src={plastic} className="img-container" />
            <button
              className="conter-btn"
              onClick={() => {
                setCount(parseFloat(count) + 0.1);
              }}
            >
              plastic
            </button>
          </div>

          <div className="counter-container1">
            <img src={metal} className="img-container" />
            <button
              className="conter-btn"
              onClick={() => {
                setCount(parseFloat(count) + 0.01);
              }}
            >
              metal
            </button>
          </div>
          <div className="counter-container2">
            <img src={paper} className="img-container" />
            <button
              className="conter-btn"
              onClick={() => {
                setCount(parseFloat(count) + 0.1);
              }}
            >
              paper
            </button>
          </div>
          <div className="counter-container3">
            <img src={glass} className="img-container" />
            <button
              className="conter-btn"
              onClick={() => {
                setCount(parseFloat(count) + 0.1);
              }}
            >
              glass
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
