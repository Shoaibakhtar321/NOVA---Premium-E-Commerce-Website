import { createContext, useState } from "react";

export const NavTab = createContext();

const Provider = ({ children }) => {
  const [tab, setTab] = useState("home");

  return <NavTab value={{ tab, setTab }}>{children}</NavTab>;
};

export default Provider;
