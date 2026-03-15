import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();

  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount) {
              const remainingUser = users.filter((user) => user._id !== id);
              setUsers(remainingUser);
              Swal.fire({
                title: "Deleted!",
                text: " User has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl"> Users : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th> phone</th>
              <th> User Actin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users &&
              users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className=" flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask   h-12 w-12">
                          <img src="/" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold"> {user.name}</div>
                        <div className="text-sm opacity-50">{user.address}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.phone}</td>

                  <th>
                    <div className="join   gap-2 mt-5">
                      <Link>
                        <button className="btn join-item">
                          <IoMdEye className="text-xl" />
                        </button>
                      </Link>
                      <Link>
                        <button className="btn join-item">
                          <CiEdit className="text-xl" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn join-item"
                      >
                        <MdDelete className="text-xl" />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
