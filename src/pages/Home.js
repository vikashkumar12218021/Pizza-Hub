import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Backgroundvideo from "../video/background2.mp4";
import "../styles/HomeStyles.css";

const Home = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = ["Pizza Hub is Comming", "   Now in Your City  "];

  useEffect(() => {
    // Update the message every 3 seconds
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [messages.length]);

  return (
    <Layout>
      <div className="home">
        <video
          className="videoBackground"
          src={Backgroundvideo}
          autoPlay
          loop
          muted
        />
        <div className="headerContainer">
          <h1>Pizza-Hub</h1>
          <p>{messages[messageIndex]}</p> {/* Dynamic motion text */}
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
