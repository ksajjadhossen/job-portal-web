import Lottie from "lottie-react";
import React from "react";
import registerLottie from "../../assets/lotties/Sign up.json";
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "300px" }}
            animationData={registerLottie}
            loop={true}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-full shrink-0 shadow-2xl">
          <h3 className="text-center text-3xl py-3">Register Now</h3>
          <div className="card-body ">
            <form className="fieldset" onSubmit={handleRegister}>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div className=" text-sm">
                <Link to={"/signin"} className="link link-hover text-blue-500">
                  already have an account?
                </Link>
              </div>
              <button className="btn btn-neutral mt-4" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
