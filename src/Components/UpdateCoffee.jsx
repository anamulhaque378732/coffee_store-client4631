import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import ContactSection from "./ContactSection";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, category, supplier, taste, photo, details } =
    coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const updatedCoffee = Object.fromEntries(fromData.entries());

    // send updated coffee to the database
    fetch(
      ` https://coffee-store-server4631-rjzuxnrhc.vercel.app/coffees/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(updatedCoffee),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl text-center font-bold"> Update coffee</h1>
      </div>
      <form action="" onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Name</label>
            <input
              defaultValue={name}
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
              defaultValue={quantity}
              required
              name="quantity"
              type="text"
              className="input w-full"
              placeholder="quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Supplier</label>
            <input
              defaultValue={supplier}
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
              defaultValue={taste}
              required
              name="taste"
              type="text"
              className="input w-full"
              placeholder="Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Category</label>
            <input
              defaultValue={category}
              required
              name="category"
              type="text"
              className="input w-full"
              placeholder="Coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box   border p-4">
            <label className="label">Details</label>
            <input
              defaultValue={details}
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
            defaultValue={photo}
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
          value="Update coffee"
        />
      </form>
      <ContactSection />
    </div>
  );
};

export default UpdateCoffee;
