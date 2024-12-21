import React from "react";
import classes from "../home.module.scss";

const Explore = () => {
  return (
    <section className={classes.exploreSection}>
      <h2 className={classes.title}>Explore The Beauty Of The World</h2>
      <p className={classes.subtitle}>
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className={classes.mapContainer}>
        <div className={classes.card} style={{ left: "20%", top: "40%" }}>
          <img src="/images/trip1.jpg" alt="Rome" />
          <h3>Rome</h3>
        </div>
        <div className={classes.card} style={{ left: "40%", top: "20%" }}>
          <img src="/images/trip2.jpg" alt="London" />
          <h3>London</h3>
        </div>
        <div className={classes.card} style={{ left: "60%", top: "50%" }}>
          <img src="/images/trip3.jpg" alt="Paris" />
          <h3>Paris</h3>
       </div>
       
              

              
        
      </div>
      <div className={classes.contactUs}>Contact Us</div>
    </section>
  );
};

export default Explore;
