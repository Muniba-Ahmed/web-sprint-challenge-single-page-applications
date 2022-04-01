import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";
import * as yup from "yup";
import schema from "./formSchema";

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
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [pizza, setPizza] = useState([]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

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
