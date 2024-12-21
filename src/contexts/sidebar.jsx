import React, { createContext, useState } from "react";

const SideBarContext = createContext({
  sideMenuOpen: false,
  toggleSideMenu: () => {},
});

const useSidebar = () => React.useContext(SideBarContext);

function SideBarProvider({children}) {
  const [sideMenuOpen, toggleSideMenu] = useState(false);
  return (
    <SideBarContext.Provider value={{ sideMenuOpen, toggleSideMenu }}>
      {children}
    </SideBarContext.Provider>
  );
}

export { SideBarProvider, useSidebar };
