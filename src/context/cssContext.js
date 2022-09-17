import React, { useState, createContext } from "react";

export const NavBarContext = createContext();

export const NavBarContextProvider = (props) => {
  const [mobView, setMobView] = useState(false);
  const [modal, setModal] = useState(false);
  const [toogle, setToogle] = useState(false);
  return (
    <NavBarContext.Provider
      value={{
        state1: [mobView, setMobView],
        state2: [modal, setModal],
        state5: [toogle, setToogle],
      }}
    >
      {props.children}
    </NavBarContext.Provider>
  );
};
