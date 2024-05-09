import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/css/mainPage.css';
import './style/css/ourCoffeePage.css';
import './style/css/singleCoffeePage.css';
import MainPage from "./pages/MainPage"
import OurCoffee from "./pages/OurCoffeePage";
import SingleCoffee from './pages/SingleCoffeePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SingleCoffee/>
  </React.StrictMode>
);

