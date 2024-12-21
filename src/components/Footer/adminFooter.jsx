import { useNavigate } from 'react-router-dom';
import classes from './Footer.module.scss'

const AdminFooter = () => {
  const navigate = useNavigate();
  return (
    <footer className={classes.wrapper_admin}>
        <small>© Designed by EitBiz</small>
        <ul>
            <li onClick={()=> navigate('/privacy-policy')}>Privacy Policy</li>
            <li onClick={()=> navigate('/terms-condition')}>Terms & Condition</li>
        </ul>
    </footer>
  )
}

export default AdminFooter