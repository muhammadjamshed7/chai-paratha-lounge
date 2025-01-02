import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Chef from './components/Chef';
import Footer from './components/Footer';
import OrderPopup from './components/OrderPopup';

function App() {
  return (
    <Router>
      <div className="bg-yellow-500 text-black min-h-screen">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/chef" component={Chef} />
        </Switch>
        <OrderPopup />
        <Footer />
      </div>
    </Router>
  );
}

export default App;