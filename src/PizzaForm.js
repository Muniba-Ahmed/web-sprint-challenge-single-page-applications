import React from "react";

const PizzaForm = (props) => {
  const { change, submit, error } = props;
  const {
    username,
    size,
    cheese,
    pepperoni,
    mushroom,
    bellpepper,
    olives,
    specialtext /** wip */,
  } = props.values;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div>
      <h1>Pizza Order Form</h1>
      <form id="pizza-form" onSubmit={onSubmit}>
        <label>
          {" "}
          Name:
          <input
            value={username}
            onChange={onChange}
            name="username"
            type="text"
            id="name-input"
          />
        </label>
        <label>
          Pizza Size:
          <select
            id="size-dropdown"
            value={size}
            name="size"
            onChange={onChange}
          >
            <option value="">--Select a Size--</option>
            <option value="individual">Individual</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra-Large</option>
          </select>
        </label>
        <label>
          Cheese
          <input
            values={cheese}
            onChange={onChange}
            name="cheese"
            type="checkbox"
            checked={cheese}
          />
        </label>
        <label>
          Pepperoni
          <input
            values={pepperoni}
            onChange={onChange}
            name="pepperoni"
            type="checkbox"
            checked={pepperoni}
          />
        </label>
        <label>
          Mushrooms
          <input
            values={mushroom}
            onChange={onChange}
            name="mushroom"
            type="checkbox"
            checked={mushroom}
          />
        </label>
        <label>
          {" "}
          Bellpeppers
          <input
            values={bellpepper}
            onChange={onChange}
            name="bellpepper"
            checked={bellpepper}
          />
        </label>
        <label>
          Olives
          <input
            values={olives}
            onChange={onChange}
            name="olives"
            type="checkbox"
            checked={olives}
          />
        </label>
        <label>
          <input
            values={specialtext}
            onChange={onChange}
            name="specialtext"
            type="text"
            id="special-text"
          />
        </label>
        <input type="submit" value="order-button" id="order-button" />
      </form>
    </div>
  );
};

export default PizzaForm;
