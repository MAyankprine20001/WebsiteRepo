import classes from './ButtonBox.module.scss'

const ButtonBox = ({type, label, rounded, onClick, primary, small, wrapperClass}) => {
  return (
    <div className={`${classes.wrapper} ${wrapperClass}`}>
        <button type={type ? type : 'button'} onClick={onClick} className={`${classes.wrapper_btn} ${small && classes.wrapper_btn_small} ${primary ? classes.wrapper_btn_primary : classes.wrapper_btn_secondary}`} style={{borderRadius: rounded ? '22px' : null}}>{label}</button>
    </div>
  )
}

export default ButtonBox;