// import { useState } from "react";
import Input from "./Input.jsx";
import { useInput } from "../hooks/useInput.js";

import { isValidEmail, isValidPassword } from "../util/validation.js";
export default function Login() {
  const {
    entredValue: email,
    isEdit: isEmailEdit,
    handleValuesChange: handleEmailChange,
    handleEdit: handleEmailBlur,
  } = useInput("");
  const {
    entredValue: password,
    isEdit: isPasswordEdit,
    handleValuesChange: handlePasswordChange,
    handleEdit: handlePasswordBlur,
  } = useInput("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("submited");
    handelReset();
  }
  function handelReset() {
    handleEmailChange("");
    handlePasswordChange("");
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
          value={email}
          onBlur={handleEmailBlur}
          onChange={(event) => handleEmailChange(event.target.value)}
          error={
            isEmailEdit &&
            !isValidEmail(email) &&
            "Please enter a valid email address."
          }
        />
        <Input
          id="password"
          type="password"
          name="password"
          label="password"
          value={password}
          onBlur={handlePasswordBlur}
          onChange={(event) => handlePasswordChange(event.target.value)}
          error={
            isPasswordEdit &&
            !isValidPassword(password) &&
            "Please enter a valid email address."
          }
        />
      </div>

      <p className="form-actions">
        <button
          className="button button-flat"
          type="reset"
          onClick={handelReset}
        >
          Reset
        </button>
        <button
          className="button"
          type="submit"
          disabled={!isValidEmail(email) || !isValidPassword(password)}
        >
          Login
        </button>
      </p>
    </form>
  );
}
