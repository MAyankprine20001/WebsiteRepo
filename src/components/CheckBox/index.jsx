import { useState } from 'react'
import classes from './CheckBox.module.scss'
import { FaCheck } from "react-icons/fa6";

const CheckBox = ({label}) => {
    const [checked, setChecked] = useState();
  return (
    <div className={classes.wrapper}>
        <label>
            <input type='checkbox' style={{ display: 'none'}} onClick={()=> setChecked(!checked)} />
            <span className={`${classes.wrapper_icon} ${checked ? classes.wrapper_icon_active : null}`}>{checked ? <FaCheck /> : null}</span>
            <span className={classes.wrapper_text}>{label}</span>
        </label>
    </div>
  )
}

export default CheckBox