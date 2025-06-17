'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { ConfigProvider, theme as antdTheme } from 'antd';
import React, { useState, useEffect, createContext } from 'react';
import "./globals.css";
import 'antd/dist/reset.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // On mount, check localStorage or system preference
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f6fa] text-[#222] dark:bg-[#18181c] dark:text-[#f5f6fa] transition-colors duration-300`}
      >
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ConfigProvider
            theme={theme === 'dark' ? {
              algorithm: antdTheme.darkAlgorithm,
              token: {
                colorPrimary: '#FFD700',
                colorBgBase: '#18181c',
                colorTextBase: '#f5f6fa',
                colorBorder: '#333',
                colorBgContainer: '#23232a',
                colorText: '#FFD700',
                borderRadius: 10,
              },
            } : {
              algorithm: antdTheme.defaultAlgorithm,
              token: {
                colorPrimary: '#FFD700',
                colorBgBase: '#f5f6fa',
                colorTextBase: '#222',
                colorBorder: '#e5e7eb',
                colorBgContainer: '#fff',
                colorText: '#222',
                borderRadius: 10,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
