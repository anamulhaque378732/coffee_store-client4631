import { Link, useLoaderData } from "react-router";
import CoffeeCard from "../../Components/CoffeeCard";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import NavFooter from "../../Components/NavFooter";
import ContactSection from "../../Components/ContactSection";

const Homepage = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <>
      <div className="pb-6 ">
        <Navbar />
      </div>

      <section>
        <NavFooter />
      </section>

      <div className="py-2 text-center">
        <p className="py-2"> --- slip & Saver ---</p>
        <h1 className="text-3xl py-2"> Our Popular Products</h1>
        <Link to="/addCoffee">
          <button className="py-2 btn btn-secondary"> Add Coffee </button>
        </Link>
      </div>
      <div className="grid max-w-6xl  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-20">
        {coffees &&
          coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
      </div>
      <div>
        <ContactSection></ContactSection>
      </div>
    </>
  );
};

export default Homepage;
