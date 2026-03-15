import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const signInInfo = {
          email: email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // update last sign to the database

        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(signInInfo),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log("after update", data);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="card my-10 py-10   flex mx-auto justify-center items-center bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="card-title"> Log In</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>

        <p>
          First time this website please register
          <Link to="/signup" className="btn">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
