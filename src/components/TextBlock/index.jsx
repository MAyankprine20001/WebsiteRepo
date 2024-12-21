import classes from './TextBlock.module.scss'

function TextBlock({classWrap, children}) {
  return (
    <div className={`${classes.wrapper} ${classWrap}`}>
        {children}
    </div>
  )
}

export default TextBlock