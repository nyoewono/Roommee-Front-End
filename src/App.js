import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'typeface-roboto';

function App() {
  return (
    <Router>
      <Register/>
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </Router> )
}

export default App;
