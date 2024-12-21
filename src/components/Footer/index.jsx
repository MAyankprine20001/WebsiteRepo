import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./Footer.module.scss";

const menuList = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "",
  },
  {
    label: "Get Started",
    path: "/signup",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onAboutClick = (path) => {
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
    <footer className={classes.wrapper}>
      <div className={classes.wrapper_footer}>
        <div className="container">
          <h2 className={classes.wrapper_ttl}>StarFish</h2>
          <ul className={classes.wrapper_menu}>
            {menuList.map((item, idx) => (
              <li
                key={idx}
                // onClick={() =>
                //   item.label === "About"
                //     ? onAboutClick(item.path)
                //     : navigate(item.path)
                // }
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.wrapper_copyright}>
        <div className="container">
          <ul className={classes.wrapper_copyright_list}>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Term & Condition</Link>
            </li>
            <li>
              <img
                src="./images/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
                style={{ marginRight: "8px" }}
              />
              <img
                src="./images/twitter.png"
                alt="Twitter"
                width={20}
                height={20}
                style={{ marginRight: "8px" }}
              />
              <img
                src="./images/linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
                style={{ marginRight: "8px" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
