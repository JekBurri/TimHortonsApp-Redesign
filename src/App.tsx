import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Outlet from './components/Outlet'

export const AppContext = React.createContext<any>(null);

function App() {
  const [view, setView] = useState({
    page: "home",
    cart: []
  });

  return (
    <AppContext.Provider value={{view, setView}}>
      <main className="flex flex-col max-w-screen-sm mx-auto h-screen justify-between creamy-latte">
        <Outlet />
        <Navbar />
      </main>
    </AppContext.Provider>
  )
}

export default App
