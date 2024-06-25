import React from "react";
import PropTypes from "prop-types";
import profileImage from "../images/ppf.jpg";
import "../styles.css"; // Ensure this import is correct

const imageAltText = "profile picture";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <div className="background-wrapper"></div>
      <div className="main-content">
        <img src={profileImage} alt={imageAltText} className="profile-image" />
        <h1>{name}</h1>
        <h2>{title}</h2>

      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;