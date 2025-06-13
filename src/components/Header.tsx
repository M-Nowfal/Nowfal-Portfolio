import { Code, Contact, FolderOpen, Home, User } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useContext, useEffect } from "react";
import { AdminContext, AuthContext, ThemeContext } from "./Layout";
import axios, { AxiosError } from "axios";
import { MessageType } from "@/utils/Types";

const Header = ({ toggleShowMessages, messages, setMessages }: {
  toggleShowMessages: () => void,
  messages: MessageType[],
  setMessages: (messages: MessageType[]) => void
}) => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { admin } = useContext(AuthContext);
  const { regetMessage, setRegetMessage } = useContext(AdminContext);

  const getMessages = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getmessages`);
      setMessages(response.data.messages);
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data.message : String(err);
      console.log(error);
    } finally {
      setRegetMessage(false);
    }
  }, [setMessages, regetMessage]);

  useEffect(() => {
    if (admin) {
      getMessages();
    }
  }, [admin, getMessages]);

  const menuStyle: string = "font-semibold hover:ps-5 hover:text-blue-500 transition-all duration-300 my-1 py-1";
  const largeMenuStyle: string = "flex items-center gap-1 font-semibold p-2 rounded-xl hover:text-blue-500 transition-all duration-200 transform hover:-translate-y-2";

  const menus = [
    { url: "#hero", icon: <Home size={15} />, name: "Home" },
    { url: "#about-me", icon: <User size={15} />, name: "About" },
    { url: "#skills", icon: <Code size={15} />, name: "Skills" },
    { url: "#projects", icon: <FolderOpen size={15} />, name: "Projects" },
    { url: "#contact", icon: <Contact size={15} />, name: "Contact" },
  ];

  return (
    <div className="navbar bg-base-100/70 shadow-md rounded-b-xl backdrop-blur-lg z-10 fixed" data-aos="fade-down">
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" suppressHydrationWarning>
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box w-52 z-10 mt-10 ms-10 mx-auto p-2 shadow-lg"
          >
            {menus.map(menu => (
              <li key={menu.name}>
                <Link href={menu.url} className={menuStyle}>{menu.icon} {menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-center md:navbar-start">
        <Link href="/" className="btn btn-ghost text-xl font-bold hover:text-blue-500">Nowfal</Link>
      </div>
      <div className="hidden md:navbar-center absolute left-[50%] translate-x-[-50%]">
        <div className="flex gap-1">
          {menus.map(menu => (
            <Link key={menu.name} href={menu.url} className={largeMenuStyle}>
              {menu.icon}
              {menu.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle" suppressHydrationWarning>
          <label className="swap swap-rotate" htmlFor="theme-toggler">
            <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} id="theme-toggler" />
            <svg
              className={`swap-on h-6 w-6 fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className={`swap-off h-6 w-6 fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </button>

        {admin && <button className="btn btn-ghost btn-circle"
          onClick={() => toggleShowMessages()}
          suppressHydrationWarning
        >
          <div className="indicator">
            <span className="absolute -top-2 -right-1 z-10 text-xs text-white">{messages.length || ""}</span>
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
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item" />
          </div>
        </button>}
      </div>
    </div>
  );
};

export default Header;
