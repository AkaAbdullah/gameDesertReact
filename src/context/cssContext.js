import React, { useState, createContext } from 'react'

export const NavBarContext = createContext()

export const NavBarContextProvider = (props) => {
  const [mobView, setMobView] = useState(false)
  const [modal, setModal] = useState(false)
  const [hamBurger, setHamburger] = useState(true)
  const [cross, setCross] = useState(false)
  return (
    <NavBarContext.Provider
      value={{
        state1: [mobView, setMobView],
        state2: [modal, setModal],
        state3: [hamBurger, setHamburger],
        state4: [cross, setCross],
      }}
    >
      {props.children}
    </NavBarContext.Provider>
  )
}
