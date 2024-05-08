import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/css/mainPage.css';
import './style/css/ourCoffeePage.css';
import MainPage from "./pages/MainPage"
import OurCoffee from "./pages/OurCoffeePage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OurCoffee/>
  </React.StrictMode>
);

