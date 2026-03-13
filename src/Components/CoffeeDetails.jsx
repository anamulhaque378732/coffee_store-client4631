import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);

  return <div> Coffee Details</div>;
};

export default CoffeeDetails;
