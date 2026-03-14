import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import ContactSection from "./ContactSection";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    // const chef = form.chef.value;
    // const supplier = form.supplier.value;
    // const taste = form.taste.value;
    // const category = form.category.value;
    // const details = form.details.value;
    // const photUrl = form.photo.value;
    // alternative way

    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // send data to the server

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
    form.reset();
  };

  return (
    <div className="p-24">
      <Link to="/">
        <button className="flex btn gap-2">
          <FaArrowLeft className="mt-1" /> Back to home
        </button>
      </Link>
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl text-center font-bold">Add coffee</h1>
        <p className="text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form action="" onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Name</label>
            <input
              required
              name="name"
              type="text"
              className="input w-full"
              placeholder="Coffee name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Quantity</label>
            <input
              required
              name="quantity"
              type="number"
              className="input w-full"
              placeholder="quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Supplier</label>
            <input
              required
              name="supplier"
              type="text"
              className="input w-full"
              placeholder=" Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Taste</label>
            <input
              required
              name="taste"
              type="text"
              className="input w-full"
              placeholder="Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Price</label>
            <input
              required
              name="price"
              type="number"
              className="input w-full"
              placeholder="Coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Details</label>
            <input
              required
              name="details"
              type="text"
              className="input w-full"
              placeholder="Coffee Details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200  my-2 border-base-300 rounded-box   border p-4">
          <label className="label">Photo url</label>
          <input
            required
            name="photo"
            type="text"
            className="input w-full"
            placeholder="photo Url"
          />
        </fieldset>
        <input
          type="submit"
          className="btn rounded-xl w-full my-2 p-2"
          name=""
          id=""
          value="Add coffee"
        />
      </form>
      <ContactSection></ContactSection>
    </div>
  );
};

export default AddCoffee;
