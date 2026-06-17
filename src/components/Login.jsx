import { useState } from "react";
export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  function handleValuesChange(identifier, value) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submited");
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
            onChange={(event) =>
              handleValuesChange("email", event.target.value)
            }
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={(event) =>
              handleValuesChange("password", event.target.value)
            }
          />
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
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
