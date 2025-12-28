import Lottie from "lottie-react";
import React from "react";
import logInLottie from "../../assets/lotties/Login and Sign up.json";
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link } from "react-router";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
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
            animationData={logInLottie}
            loop={true}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-full shrink-0 shadow-2xl">
          <h3 className="text-center text-3xl py-3">Log in here</h3>
          <div className="card-body ">
            <form className="fieldset" onSubmit={handleSignIn}>
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
              <div className="flex flex-col text-sm">
                <Link className="link link-hover">Forgot password?</Link>
                <Link
                  to={"/register"}
                  className="link link-hover text-blue-600"
                >
                  don't have an account?
                </Link>
              </div>
              <button className="btn btn-neutral mt-4" type="submit">
                SignIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
