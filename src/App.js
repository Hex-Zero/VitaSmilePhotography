import React from "react"
import Navigation from "./components/Navigation"
import SocialMedia from "./components/SocialMedia"
import Home from "./components/Home"
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Pricing" component={Pricing} />
      <SocialMedia />
      <Footer />
    </Router>
  )
}

export default App
