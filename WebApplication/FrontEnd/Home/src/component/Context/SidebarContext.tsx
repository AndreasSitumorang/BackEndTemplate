import React, { createContext, useState, useContext } from 'react';

interface SidebarContextType {
  isSidebarVisible: boolean;
  setSidebarVisible: (visible: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const setSidebarVisible = (visible: boolean) => {
    setIsSidebarVisible(visible);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, setSidebarVisible }}>
      {children}
    </SidebarContext.Provider>
  );
};
