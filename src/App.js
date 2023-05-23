import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from "@material-tailwind/react";
function MyApp() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;
