import classes from './TableCallToActionCard.module.scss'
import { CiEdit, CiTrash } from "react-icons/ci"

const TableCallToActionCard = ({onEditClick, onDeleteClick}) => {
  return (
    <ul className={classes.wrapper}>
        <li><button type='button' onClick={onEditClick} className={classes.wrapper_edit}><CiEdit /></button></li>
        <li><button type='button' onClick={onDeleteClick} className={classes.wrapper_delete}><CiTrash /></button></li>
    </ul>
  )
}

export default TableCallToActionCard