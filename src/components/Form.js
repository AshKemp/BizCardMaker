import React from "react";
import FormElement from "./FormElement";

const Form = ({ onChange, Values }) => {
  return (
    <section className="Form">
      <h2>Enter your details</h2>
      <form onChange={onChange}>
        {Object.keys(Values).map((field, key) => (
          <FormElement
            ID={field}
            Label={field}
            key={key}
            Value={Values[field]}
          />
        ))}
      </form>
      {/* <pre>{JSON.stringify(Values, null, 2)}</pre> */}
    </section>
  );
};

export default Form;
