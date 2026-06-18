import { useState } from "react";
export default function Login() {
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    formValues.email,
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
      formValues.password,
    );
  function handleValuesChange(identifier, value) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submited");
    setFormValues({ email: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            onFocus={() => setIsFocused({ ...isFocused, email: true })}
            onChange={(event) =>
              handleValuesChange("email", event.target.value)
            }
          />
          {isFocused.email && !isEmailValid && (
            <div className="control-error">
              <p>Please enter a valid email address.</p>
              <p style={{ color: "darkgray" }}>Example: user@example.com</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formValues.password}
            onFocus={() => setIsFocused({ ...isFocused, password: true })}
            onChange={(event) =>
              handleValuesChange("password", event.target.value)
            }
          />
          {isFocused.password && !isPasswordValid && (
            <div className="control-error">
              <p>
                Password must be at least 8 characters long and include at least
                one lowercase letter, one uppercase letter, one digit, and one
                special character.
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="form-actions">
        <button
          className="button button-flat"
          type="button"
          onClick={() => setFormValues({ email: "", password: "" })}
        >
          Reset
        </button>
        <button
          className="button"
          type="submit"
          disabled={!(isEmailValid && isPasswordValid)}
        >
          Login
        </button>
      </p>
    </form>
  );
}
