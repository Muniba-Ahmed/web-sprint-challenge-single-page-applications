import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";

const initialFormValues = {
  name: "",
  size: "",
  cheese: false,
  pepperoni: false,
  mushroom: false,
  bellpepper: false,
  olives: false,
  specials: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const App = () => {
  const [pizza, setPizza] = useState([]);

  return (
    <div className="App">
      <nav>
        <h1 className="header">Bloomtech&apos; Pizzeria</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
      <Route path="/pizza">
        <PizzaForm />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
};
export default App;
