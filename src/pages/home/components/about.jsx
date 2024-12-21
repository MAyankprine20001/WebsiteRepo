import { useNavigate } from "react-router-dom";
import ButtonBox from "../../../components/ButtonBox";
import TextBlock from "../../../components/TextBlock";
import classes from "../home.module.scss";

const AboutBox = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper_about} id="aboutSection">
      <div className="container">
        <div className={classes.wrapper_about_row}>
          <div
            data-aos="fade-right"
            className={`${classes.wrapper_about_box} ${classes.wrapper_about_box_desktop}`}
          >
            <img
              src="/images/JourneyImage.png"
              alt=""
              className={classes.wrapper_about_img}
            />
          </div>
          <div className={classes.wrapper_about_box} data-aos="fade-left">
            <h2 className={classes.wrapper_about_ttl}>
              About <span>Us</span>
            </h2>
            <div className={classes.wrapper_about_box_mobile}>
              <img
                src="/images/JourneyImage.png"
                alt=""
                className={classes.wrapper_about_img}
              />
            </div>
            <TextBlock classWrap={classes.wrapper_about_txt}>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </TextBlock>
            {/* <div className={classes.wrapper_about_cta}>
              <ButtonBox
                label="Download App"
                wrapperClass={classes.wrapper_about_cta_btnWrap}
              />
              <ButtonBox
                label="Get Started"
                primary
                onClick={() => navigate("/signup")}
                wrapperClass={classes.wrapper_about_cta_btnWrap}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
