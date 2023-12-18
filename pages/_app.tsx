// pages/_app.tsx
import React, { useState, useEffect } from "react";
import "../app/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from "next";
import NavbarTop from "@/components/Navbar/NavbarTop";
import { useThemeContext, ThemeProvider } from "@/context/ThemeContext";
import Layout from "@/app/layout";

export const metadata: Metadata = {
  title: "Dough.",
  description: "A simple personal finance app powered by Next.JS",
};

const MainComponent = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  const { isDark } = useThemeContext();
  const [theme, setTheme] = useState("cupcake");

  useEffect(() => {
    if (isDark === true) {
      setTheme("dark");
    } else {
      setTheme("cupcake");
    }
  }, [isDark]);

  useEffect(() => {
    console.log("theme: ", theme);
  }, [theme]);

  return (
    <Layout>
      <div
        className="flex flex-col justify-center items-center h-screen w-screen bg-base-300"
        data-theme={`${theme}`}
      >
        <div className="w-full h-[7%]">
          <NavbarTop className="h-fit p-4" />
        </div>
        <div className="w-full h-[93%] p-5 flex flex-col">
          <Component {...pageProps} />
        </div>
      </div>
    </Layout>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MainComponent Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
