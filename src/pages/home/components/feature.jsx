import TextBlock from "../../../components/TextBlock";
import classes from "../home.module.scss";

const featureData = [
  {
    icon: "/images/trip1.jpg",
    title: "Rome",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "/images/trip2.jpg",
    title: "Paris",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "/images/trip3.jpg",
    title: "Canada",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "/images/london_001.jpg",
    title: "London",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "/images/trip3.jpg",
    title: "Spain",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "/images/trip1.jpg",
    title: "Wishton",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const FeatureBox = () => {
  return (
    <div className={classes.wrapper_feature}>
      <div className="container">
        <div className={classes.wrapper_feature_ttlWrap}>
          <h2 className={classes.wrapper_feature_ttl}>
            <span>Popular Trips</span>
          </h2>
          <TextBlock classWrap={classes.wrapper_feature_txt}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </TextBlock>
        </div>
        <div className={classes.wrapper_feature_row}>
          <div className={classes.wrapper_feature_box} data-aos="fade-right">
            {featureData.slice(0, 3).map((item, idx) => (
              <div key={idx} className={classes.wrapper_feature_item}>
                <div className={classes.wrapper_feature_item_icon}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className={classes.wrapper_feature_item_content}>
                  <h4 className={classes.wrapper_feature_item_ttl}>
                    {item.title}
                  </h4>
                  <TextBlock classWrap={classes.wrapper_feature_item_txt}>
                    <p>{item.text}</p>
                  </TextBlock>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.wrapper_feature_img} data-aos="fade-up">
            <img src="/images/Plane.png" alt="" width={300} height={300} />
          </div>
          <div className={classes.wrapper_feature_box} data-aos="fade-left">
            {featureData.slice(3, 6).map((item, idx) => (
              <div key={idx} className={classes.wrapper_feature_item}>
                <div className={classes.wrapper_feature_item_icon}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className={classes.wrapper_feature_item_content}>
                  <h4 className={classes.wrapper_feature_item_ttl}>
                    {item.title}
                  </h4>
                  <TextBlock classWrap={classes.wrapper_feature_item_txt}>
                    <p>{item.text}</p>
                  </TextBlock>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
