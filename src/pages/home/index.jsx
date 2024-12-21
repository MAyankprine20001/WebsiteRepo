import AboutBox from "./components/about";
import BannerBox from "./components/banner";
import Explore from "./components/Explore";
import FeatureBox from "./components/feature";
import GateFenceBox from "./components/gateFence";
import Journey from "./components/Journey";
import VendorBox from "./components/vendor";
import classes from "./home.module.scss";

const HomePage = () => {
  return (
    <section className={classes.wrapper}>
      <BannerBox />
      <AboutBox />
      <FeatureBox />
      <VendorBox />
      <GateFenceBox />
      <Journey />
      <Explore />
      {/* <div className={classes.wrapper_download} data-aos="fade-zoom">
        <div className="container">
          <h2 className={classes.wrapper_download_ttl}>
            Download Your F E N F O App Today!
          </h2>
          <ul className={classes.wrapper_download_list}>
            <li>
              <img src="/images/home/apple-icon.png" alt="" />{" "}
              <span>
                Download on the <b>App Store</b>
              </span>
            </li>
            <li>
              <img src="/images/home/playstore-icon.png" alt="" />{" "}
              <span>
                GET IT ON <b>Google Play</b>
              </span>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default HomePage;
