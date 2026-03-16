import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...rest } = Object.fromEntries(formData.entries());

    // create user in the firebase
    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...rest,
          creationTime: result.user?.metadata.creationTime,
          lastSignInTime: result.user?.metadata.lastSignInTime,
        };

        // save profile info in the db
        fetch(" https://coffee-store-server4631-rjzuxnrhc.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(userProfile),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: " Your account is created",
                icon: "success",
                draggable: true,
                timer: 1500,
              });
            }
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

    form.reset();
  };

  return (
    <div className="card my-10 py-10  flex mx-auto justify-center items-center bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="card-title"> Sign Up</h1>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
          />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
            required
          />
          <label className="label">Phone Number</label>
          <input
            type="number"
            name="phone"
            className="input"
            placeholder="Phone number"
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <button className="btn btn-neutral mt-4">Sign up</button>
        </form>

        <p>
          Already have an account please login
          <Link to="/signin" className="btn">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
