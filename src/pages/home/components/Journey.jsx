import ButtonBox from "../../../components/ButtonBox";
import TextBlock from "../../../components/TextBlock";
import classes from "../home.module.scss";

const Journey = () => {
  return (
    <div className={classes.wrapper_vendor}>
      <div className="container">
        <div className={classes.wrapper_vendor_row}>
          <div className={classes.wrapper_vendor_box} data-aos="fade-right">
            <img src="/images/trip2.jpg" alt="Destination" />
          </div>
          <div className={classes.wrapper_vendor_box} data-aos="fade-left">
            <h2 className={classes.wrapper_vendor_ttl}>
              Packages & Activities
            </h2>
            <TextBlock>
              <h3 className={classes.destination}>Europe</h3>
              <p className={classes.details}>
                Capital: <span>Paris</span> <br />
                from <span>5 nights</span>
              </p>
              <p className={classes.price}>
                from <strong>$600/Person</strong>
              </p>
              <ButtonBox
                label="Book Now"
                primary
                small
                wrapperClass={classes.wrapper_menu_actn_btnWrap}
              />
            </TextBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
