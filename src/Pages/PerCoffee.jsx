import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PerCoffee = ({ perData }) => {
  const handleDelte = (_id) => {
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              console.log(data);
            }
          });
      }
    });
  };
  const {
    _id,
    coffeeName,
    coffeeSupplier,
    coffeeCategory,
    coffeeChef,
    coffeeTaste,
    coffeeDetails,
    coffeeUrl,
  } = perData;
  return (
    <div className="card card-side bg-base-100 shadow-xl p-4">
      <figure>
        <img className="w-52" src={coffeeUrl} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full m-3">
        <div className="">
          <h2 className="card-title">{coffeeName}</h2>
          <p>{coffeeDetails}</p>
          <p>{coffeeSupplier}</p>
          <p>{coffeeCategory}</p>
          <p>{coffeeChef}</p>
          <p>{coffeeTaste}</p>
        </div>

        <div className="">
          <div className="flex flex-col gap-5">
            <button className="btn btn-primary">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-secondary">Edit</button>
            </Link>
            <button onClick={() => handleDelte(_id)} className="btn btn-square">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerCoffee;
