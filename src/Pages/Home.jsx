import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import hero from "../assets/rebit.png";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="Logo-container">
        <h1 className="logo">
          Rebit<span>.</span>
        </h1>
      </div>
      <div className="hero-section1">
        <div className="heading-container">
          <div>
            <h2 className="heading-main">
              Get rewarded for the kindness towards nature
            </h2>
          </div>
          <p className="heading-sub">
            The blockchain community based platform that pays you in the form of
            token whenever you put valid amount of recycles in the bin
          </p>
          <div className="btn-more">
            <Link to="/dashboard">
              <button className="btn-start">Get started</button>
            </Link>
            <button className="learnmore" onClick={scrollToTop}>
              Learn more
            </button>
          </div>
        </div>
        <img src={hero} alt="" className="hero" />
      </div>
      <div className="learn_more"></div>
    </>
  );
};

export default Home;
