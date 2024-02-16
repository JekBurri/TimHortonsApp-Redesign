import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Outlet from './components/Outlet'

export const AppContext = React.createContext<any>(null);

function App() {
  const [view, setView] = useState({
    page: "home"
  });

  return (
    <AppContext.Provider value={{view, setView}}>
      <Outlet />
      <Navbar />
    </AppContext.Provider>
  )
}

export default App
