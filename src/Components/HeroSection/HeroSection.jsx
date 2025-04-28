import React from "react";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/hero.jpg";
import PropertyFilter from "../PropertyFilter/PropertyFilter";

function HeroSection() {
  return (
    <>
      <div className={styles.heroContainer}>
        <img className={styles.heroImage} src={heroImage} alt="heroImage" />
        <div className={styles.heroContent}>
          <h1>Peace nature dream</h1>
          <p>Find and book a great experience.</p>
        </div>
      </div>
      <div>
          <PropertyFilter/>
      </div>
    </>
  );
}
// #282e3c--color of the filter box #4a5567 color for the background of the pill // #e5f8ff loght blue color 
export default HeroSection;
