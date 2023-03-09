import React from 'react'
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (<>
  <Navbar/>
  <Home/>
  <Service/>
  <Portfolio/>
  <About/>
  <Contact/>
  <Footer/>
  </>
  )
}
