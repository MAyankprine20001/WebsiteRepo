import { useLocation, useNavigate } from 'react-router-dom'
import classes from './Sidebar.module.scss'
import ButtonBox from '../ButtonBox';
import { IoMdSettings } from "react-icons/io";
import useWindowDimensions from '../../hook/useWindowDimensions';

const menuList = [
    {
        label: '',
        child: [
            {
                icon: '/images/sidebar/icon1.png',
                name: 'Dashboard',
                path: '/dashboard',
            },
            {
                icon: '/images/sidebar/icon2.png',
                name: 'My Estimates',
                path: '/my-estimates',
            },
            {
                icon: '/images/sidebar/icon7.png',
                name: 'Quotation List',
                path: '/quotation',
            },
        ],
    },
    {
        label: 'Managements',
        child: [
            {
                icon: '/images/sidebar/icon3.png',
                name: 'Manage Vendors',
                path: '/vendors',
            },
            {
                icon: '/images/sidebar/icon4.png',
                name: 'Manage Customers',
                path: '/customers',
            },
            {
                icon: '/images/sidebar/icon5.png',
                name: 'Manage Fences',
                path: '/fences',
            },
            {
                icon: '/images/sidebar/icon6.png',
                name: 'Manage Gates',
                path: '/gates',
            },
            {
                icon: '/images/sidebar/icon7.png',
                name: 'Manage Brands',
                path: '/brands',
            },
        ],
    },
]

const Sidebar = ({showSidebar, closeSidebar}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { width } = useWindowDimensions();
  return (
    <aside className={`${classes.wrapper} ${showSidebar ? classes.wrapper_open : null}`}>
        <div className={classes.wrapper_logo}>
            <div className={classes.wrapper_logo_over} onClick={()=> navigate('/')}>
                <img src='/images/logo1.png' alt='Fenfo' />
            </div>
        </div>
        {menuList.map((item, idx) => (
        <div key={idx} className={classes.wrapper_menu}>
            {item.label && <label className={classes.wrapper_menu_label}>{item.label}</label>}
            <ul className={classes.wrapper_menu_list}>
                {item.child.map((menu, i) => (
                <li key={i} onClick={()=> {
                    navigate(menu.path);
                    if(width < 992) closeSidebar();
                }} className={location.pathname === menu.path ? classes.active : null}>
                    <img src={menu.icon} alt={menu.name} />
                    <span>{menu.name}</span>
                </li>
                ))}
            </ul>
        </div>
        ))}
        <div className={classes.wrapper_cta}>
            <ButtonBox wrapperClass={classes.wrapper_cta_outline} onClick={()=> {
                navigate('/setting');
                if(width < 992) closeSidebar();
            }} label={<><IoMdSettings /> Setting</>} />
            <ButtonBox wrapperClass={classes.wrapper_cta_primary} primary onClick={()=> navigate('/login')} label='Logout' />
        </div>
    </aside>
  )
}

export default Sidebar