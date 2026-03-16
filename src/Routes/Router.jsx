import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Homepage from "../Pages/HomePage/Homepage";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";
import ErrorElement from "../Components/ErrorElement";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Users from "../Components/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        loader: () =>
          fetch(
            " https://coffee-store-server4631-rjzuxnrhc.vercel.app/coffees",
          ),
        Component: Homepage,
        hydrateFallbackElement: <p>loading</p>,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(
            ` https://coffee-store-server4631-rjzuxnrhc.vercel.app/coffees/${params.id}`,
          ),
        Component: CoffeeDetails,
        hydrateFallbackElement: <p> Loading</p>,
      },

      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            ` https://coffee-store-server4631-rjzuxnrhc.vercel.app/coffees/${params.id}`,
          ),
        Component: UpdateCoffee,
        hydrateFallbackElement: <p>Loading</p>,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },

      {
        path: "users",
        loader: () =>
          fetch(" https://coffee-store-server4631-rjzuxnrhc.vercel.app/users"),
        Component: Users,
        hydrateFallbackElement: <p>loading</p>,
      },
    ],
  },
]);
