import TextBlock from "../TextBlock";
import classes from "./TableNameCard.module.scss";

const bgColor = {
  active: "#006710",
  cancel: "#9E0000" 
}

const TableNameCard = ({ item }) => {
  const getInitials = (name) => {
    return name
      .split(" ") // Split the name into individual words
      .map((word) => word.charAt(0)) // Get the first letter of each word
      .join("") // Concatenate the letters
      .toUpperCase(); // Convert to uppercase
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_icon}>
        {item?.image ? (
          <img
            className={classes.wrapper_icon_img}
            src={item?.image}
            alt={item?.name}
          />
        ) : (
          <span className={classes.wrapper_icon_initial} style={{ backgroundColor: bgColor[item?.status], color: item?.status && '#fff' }}>{getInitials(item?.name)}</span>
        )}
      </div>
      <div className={classes.wrapper_text}>
        <TextBlock classWrap={classes.wrapper_text_name}>
          <span>{item?.name}</span>
        </TextBlock>
        <TextBlock classWrap={classes.wrapper_text_email}>
          <span>{item?.email || item?.address}</span>
        </TextBlock>
      </div>
    </div>
  );
};

export default TableNameCard;
