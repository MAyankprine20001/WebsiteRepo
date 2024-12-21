import { useNavigate, useLocation } from "react-router-dom";
import ButtonBox from "../ButtonBox";
import classes from "./Header.module.scss";
import { CgMenu, CgClose } from "react-icons/cg";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hook/useClickOutside";
import { FaUser } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";

const menuList = [
  { label: "Home", path: "/" },
  { label: "About", path: "" },
  { label: "My Estimates", path: "/my-estimates", showOnlyOnLogin: true },
];

const userMenuList = [
  {
    icon: PiUserCircleFill,
    label: "My Account",
    path: "/dashboard",
  },
  {
    icon: IoLogOut,
    label: "Logout",
    path: "/login",
  },
];

const UserBox = ({ navigate }) => {
  const ref = useRef();
  const [showDropdown, setShowDropdown] = useState();
  useClickOutside(ref, () => {
    setShowDropdown(null);
  });
  return (
    <div className={classes.wrapper_user} ref={ref}>
      <button
        type="button"
        className={classes.wrapper_user_btn}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span>
          <FaUser />
        </span>
        {showDropdown ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {showDropdown && (
        <div className={classes.wrapper_user_dropdown}>
          <ul>
            {userMenuList.map((item, idx) => (
              <li
                key={idx}
                onClick={() => {
                  navigate(item.path);
                  setShowDropdown(false);
                }}
              >
                <item.icon />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState();
  const onNavClick = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  const onAboutClick = (path) => {
    setShowMenu(false);
    if (location === "/") {
      const sectionElement = document.getElementById("aboutSection");
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => {
        const sectionElement = document.getElementById("aboutSection");
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
  };

  return (
    <header className={classes.wrapper}>
      <div className="container">
        <div className={classes.wrapper_row}>
          <div className={classes.wrapper_logo}>
            <img
              src={"/images/LOGO.jpg"}
              alt="Fenfo"
              onClick={() => navigate("/")}
            />
          </div>
          <div
            className={`${classes.wrapper_menu} ${
              showMenu && classes.wrapper_menu_open
            }`}
          >
            <div className={classes.wrapper_menu_logo}>
              <img
                src={"/images/logo.png"}
                alt="Fenfo"
                onClick={() => navigate("/")}
              />
            </div>
            <ul className={classes.wrapper_menu_nav}>
              {menuList.map((item, idx) => {
                if (item?.showOnlyOnLogin !== undefined && !isLoggedIn) return;
                return (
                  <li
                    key={idx}
                    className={
                      location.pathname === item.path ? classes.active : null
                    }
                    onClick={() =>
                      item.label === "About"
                        ? onAboutClick(item.path)
                        : onNavClick(item.path)
                    }
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
            {!isLoggedIn && (
              <div className={classes.wrapper_menu_actn}>
                <ButtonBox
                  label="Login"
                  small
                  // onClick={() => {
                  //   navigate("/login");
                  //   setShowMenu(false);
                  // }}
                  wrapperClass={classes.wrapper_menu_actn_btnWrap}
                />
                <ButtonBox
                  label="Get Started"
                  primary
                  small
                  // onClick={() => {
                  //   navigate("/signup");
                  //   setShowMenu(false);
                  // }}
                  wrapperClass={classes.wrapper_menu_actn_btnWrap}
                />
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className={`${classes.wrapper_menuBtn} ${
              showMenu && classes.wrapper_menuBtn_active
            }`}
          >
            {showMenu ? <CgClose /> : <CgMenu />}
          </button>
          {isLoggedIn && <UserBox navigate={navigate} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
