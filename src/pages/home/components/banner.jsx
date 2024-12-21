import { useNavigate } from "react-router-dom";
import ButtonBox from "../../../components/ButtonBox";
import TextBlock from "../../../components/TextBlock";
import classes from "../home.module.scss";

const BannerBox = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper_banner}>
      <div className="container">
        <div className={classes.wrapper_banner_box} data-aos="fade-right">
          <h1 className={classes.wrapper_banner_ttl}>
            Journey to <span>Your Dreams</span>
          </h1>
          <TextBlock classWrap={classes.wrapper_banner_txt}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </TextBlock>
          {/* <div className={classes.wrapper_banner_cta}>
                    <ButtonBox
                        label="Download App"
                        wrapperClass={classes.wrapper_banner_cta_btnWrap}
                    />
                    <ButtonBox
                        label="Get Started"
                        primary
                        onClick={()=> navigate('/signup')}
                        wrapperClass={classes.wrapper_banner_cta_btnWrap}
                    />
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default BannerBox;
