import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Contact from "./Component/Contact/Contact";
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Homepage from "./Component/HomePage/Homepage";
import Event from "./Component/Events/Event";
import EventDetails from "./Component/Events/EventDetails";
import Story from "./Component/Story/Story";
import Team from "./Component/Team/Team";
import Gallery from "./Component/Gallery/Gallery";
import Cart from "./Component/Cart/Cart";
import Checkout from "./Component/Checkout/Checkout";
import Home from "./Component/Home/Home";
import SignUp from "./Component/SignUp/SignUp";
import Login from "./Component/Login/Login";
import FindYourMatch from "./Component/FindYourMatch/FindYourMatch";
import FindDetail from "./Component/FindYourMatch/FindDetail";

// import About from './Component/About/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find_your_match" element={<FindYourMatch />} />
          <Route path="/partner_detail/:_id" element={<FindDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event_detail" element={<EventDetails />} />
          <Route path="/story" element={<Story />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
