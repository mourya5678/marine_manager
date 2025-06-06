import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";

const root = ReactDOM.createRoot(document.getElementById('root'));
const stripePromise = loadStripe("pk_live_51QRmwGC1d7gJ8IQpT6R2pUFqAhvjw0rxjcNXRSiRZp0dR0qETPWblOawpC7XxZA0eJtOq1Ry2BCBoE08K1NTNO0H0028UrkjHK");

root.render(
  <Elements stripe={stripePromise}>
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
    </Provider>
  </Elements>
);

reportWebVitals();