import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import hero from "../assets/rebit.png";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
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
        <img src={hero} alt="" className="hero" />
        <div className="heading-container">
          <h2 className="heading-main">Get rewarded for</h2>
          <h2 className="heading-main">the kindness </h2>
          <h2 className="heading-main">towards nature</h2>

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
      </div>
      <div className="learn_more"></div>
    </>
  );
};

export default Home;
