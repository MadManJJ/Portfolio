import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  ); // set the first value of theme to light if there no theme in localStorage

  useEffect(() => {
    // run when theme is change mean it will add Attribute whenever the theme value is change
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // console.log("theme switched");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // make all the children be able to use theme, toggleTheme
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
