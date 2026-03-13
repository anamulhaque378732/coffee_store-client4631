import { Link } from "react-router";
import Swal from "sweetalert2";
import { IoMdEye } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, price, photo, quantity, _id } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your  coffee has been deleted.",
                icon: "success",
              });
              // remove the coffee from the state
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== _id,
              );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card border card-side bg-base-100 shadow-sm">
      <figure>
        <img className="pl-2" src={photo} alt="photo" />
      </figure>
      <div className="  flex  justify-around w-full">
        <div className="mt-3">
          <h2 className=" p-2 "> {name}</h2>
          <p className="p-2"> Price: {price}</p>
          <p className="p-2">Quantity : {quantity}</p>
        </div>

        <div className="join join-vertical gap-2 mt-5">
          <Link to={`/coffee/${_id}`}>
            <button className="btn join-item">
              <IoMdEye className="text-xl" />
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn join-item">
              <CiEdit className="text-xl" />
            </button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            <MdDelete className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
