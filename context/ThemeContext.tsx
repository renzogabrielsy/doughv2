"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext({
  isDark: false,
  setIsDark: (value: boolean) => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedIsDark =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("isDark") || "false")
        : false;
    setIsDark(storedIsDark);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
