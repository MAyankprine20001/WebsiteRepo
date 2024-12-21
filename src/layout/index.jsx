import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { SideBarProvider } from '../contexts/sidebar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import AdminFooter from '../components/Footer/adminFooter';
import AdminHeader from '../components/Header/adminHeader';

const MainLayout = ({ onOpenMenu, menuShow, setMenuShow, isLoggedIn, hideComponents}) => {
  
  return (
    <SideBarProvider>
      <div className={hideComponents ? `wrapper ${menuShow ? 'wrapper--open' : null}` : null}>
        {!hideComponents ? <Header isLoggedIn={isLoggedIn} /> : <Sidebar showSidebar={menuShow} closeSidebar={()=> setMenuShow(false)} />}
        <main id="ContentBox">
          {hideComponents && <AdminHeader onMenuClick={onOpenMenu} menuShow={menuShow} />}
          <Outlet />
        </main>
        {!hideComponents ? <Footer /> : <AdminFooter />}
      </div>
    </SideBarProvider>
  )
}

export default MainLayout