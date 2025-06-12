"use client";

import React, { createContext, useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import MessageView from './MessageView';

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => { }
});

export const AuthContext = createContext({
  admin: false,
  toggleAdmin: () => { }
});

type MessageType = {
  _id: string;
  name: string;
  email: string;
  msg: string;
  createdAt: string;
};

const Layout = ({ children }: { children: React.ReactNode }) => {

  const [theme, setTheme] = useState("dark");
  const [admin, setAdmin] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [showMessages, setShowMessages] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    toggleAdmin();
  }, [admin]);

  const toggleAdmin = () => {
    setAdmin(localStorage.getItem("admin") ? true : false);
  };

  const toggleShowMessages = () => {
    setShowMessages((prev: boolean) => !prev)
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ admin, toggleAdmin }}>
        <Header
          toggleShowMessages={toggleShowMessages}
          messages={messages}
          setMessages={setMessages}
        />
        {showMessages && <MessageView
          messages={messages}
          toggleShowMessages={toggleShowMessages}
          setMessages={setMessages}
        />}
        {children}
      </AuthContext.Provider>
      <Footer />
    </ThemeContext.Provider>
  )
}

export default Layout;