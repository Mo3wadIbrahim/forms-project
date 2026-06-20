import { useState } from "react";
import Input from "./Input.jsx";

import { isValidEmail, isValidPassword } from "../util/validation.js";
export default function Login() {
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  function handleValuesChange(identifier, value) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setIsFocused((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submited");
    setFormValues({ email: "", password: "" });
  }

  function handleBlur(identifier) {
    setIsFocused({ ...isFocused, [identifier]: true });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          id="email"
          type="email"
          name="email"
          label="Email"
          value={formValues.email}
          onBlur={() => handleBlur("email")}
          onChange={(event) => handleValuesChange("email", event.target.value)}
          error={
            isFocused.email &&
            !isValidEmail(event.target.value) &&
            "Please enter a valid email address."
          }
          required
        />
        <Input
          id="password"
          type="password"
          name="password"
          label="password"
          value={formValues.password}
          onBlur={() => handleBlur("password")}
          onChange={(event) =>
            handleValuesChange("password", event.target.value)
          }
          error={
            isFocused.password &&
            !isValidPassword(event.target.value, 8) &&
            "Please enter a valid password."
          }
          required
        />
      </div>

      <p className="form-actions">
        <button
          className="button button-flat"
          type="button"
          onClick={() => setFormValues({ email: "", password: "" })}
        >
          Reset
        </button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
