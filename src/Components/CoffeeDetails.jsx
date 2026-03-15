import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  return <div> Coffee Details</div>;
};

export default CoffeeDetails;
