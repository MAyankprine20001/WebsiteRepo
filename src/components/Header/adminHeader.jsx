import { useState } from "react";
import classes from "./Header.module.scss";
import { FaBars } from "react-icons/fa6";
import TextBlock from "../TextBlock";

const AdminHeader = ({ onMenuClick, menuShow }) => {
  const [userDetails] = useState({
    name: "Orion",
    organization: "Fence Service Ltd.",
    img: "/images/user-img.png",
  });
  return (
    <header className={classes.wrapper_admin}>
      <button
        type="button"
        className={`${classes.wrapper_admin_menu} ${menuShow ? classes.wrapper_admin_menu_active : null}`}
        onClick={onMenuClick}
      >
        <FaBars />
      </button>
      <div className={classes.wrapper_admin_user}>
        <TextBlock classWrap={classes.wrapper_admin_user_name}>
            <p>
                {userDetails.name} 
                <small>{userDetails.organization}</small>
            </p>
        </TextBlock>
        <img src={userDetails.img} alt={userDetails.name} />
      </div>
    </header>
  );
};

export default AdminHeader;
