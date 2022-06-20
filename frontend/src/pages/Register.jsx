import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an Account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
