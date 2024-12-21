import { useState } from "react";
import classes from "./InputBox.module.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const InputBox = ({ icon: Icon, classWrap, classInput, type, ...rest }) => {
  const [inputType, setInputType] = useState(type);
  const onShowPass = () => {
    setInputType((v) => v === "password" ? "text" : "password");
  }
  return (
    <div className={`${classes.wrapper} ${classWrap}`}>
      <div className={classes.wrapper_cover}>
        {Icon && <span className={classes.wrapper_icon}><Icon /></span>}
        <input type={inputType} {...rest} className={`${classes.wrapper_input} ${classInput}`} style={{ paddingLeft: Icon ? '40px' : '16px', paddingRight: type === 'password' ? '50px' : '16px'}} />
        {type === "password" && <span className={classes.wrapper_eyeBtn} onClick={onShowPass}>{inputType === "password" ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>}
      </div>
    </div>
  );
};

export default InputBox;
