import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

function NavbarTop({ className }: Props) {
  const { isDark, setIsDark } = useThemeContext();
  const router = useRouter();
  const pageTitle = router.pathname.split('/').pop();

  return (
    <div
      className={`w-full navbar bg-secondary fixed z-50 rounded-b-2xl py-1 shadow-lg flex flex-row justify-between items-center ${className}`}
    >
      <div className="hidden lg:flex w-[33%] text-purple-950">
        <ul className="menu menu-horizontal px-1 font-semibold ">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li className="">
            <details>
              <summary>Profile</summary>
              <ul className="p-2 text-base-content">
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Accounts</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="lg:hidden w-[33%] flex flex-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <a>Profile</a>
              <ul className="p-2">
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Accounts</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[34%] flex justify-center">
        <h1 className="font-bold text-2xl text-violet-950">dough.<span className="text-sm text-violet-950 text-opacity-80">{pageTitle}</span></h1>
      </div>
      <div className="flex justify-end items-center w-[33%] pr-5 gap-2 text-violet-950">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => {
            setIsDark(!isDark);
          }}
          className="toggle theme-controller"
        />
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost"
          >
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-8">
                <span className="text-xs"></span>
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
