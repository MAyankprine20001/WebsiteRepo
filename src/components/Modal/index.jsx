import classes from "./Modal.module.scss";

const Modal = ({ show, children }) => {
  return (
    <>
      {show && (
        <div className={classes.wrapper}>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
