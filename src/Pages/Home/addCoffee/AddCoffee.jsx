import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const coffeeSupplier = form.coffeeSupplier.value;
    const coffeeCategory = form.coffeeCategory.value;
    const coffeeChef = form.coffeeChef.value;
    const coffeeTaste = form.coffeeTaste.value;
    const coffeeDetails = form.coffeeDetails.value;
    const coffeeUrl = form.coffeeUrl.value;

    const newCoffee = {
      coffeeName,
      coffeeSupplier,
      coffeeCategory,
      coffeeChef,
      coffeeTaste,
      coffeeDetails,
      coffeeUrl,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee is Successfully added!",
            icon: "success",
          });
        }
      })
      .catch(console.log);
  };

  return (
    <div className="bg-gray-200 p-10">
      <h1 className="text-5xl font-bold">Add Coffee</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-10 mt-5 justify-center">
          {/* first div */}
          <div className="space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                name="coffeeName"
                className="grow"
                defaultValue="Enter Coffee Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Supplier
              <input
                type="text"
                name="coffeeSupplier"
                className="grow"
                defaultValue="Enter Coffee Supplier"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input
                type="text"
                name="coffeeCategory"
                className="grow"
                defaultValue="Enter Coffee Category"
              />
            </label>
          </div>
          {/* second div */}
          <div className="space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              Chef
              <input
                type="text"
                name="coffeeChef"
                className="grow"
                defaultValue="Enter Coffee Chef"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Taste
              <input
                type="text"
                name="coffeeTaste"
                className="grow"
                defaultValue="Enter Coffee Taste"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input
                type="text"
                name="coffeeDetails"
                className="grow"
                defaultValue="Enter Coffee Details"
              />
            </label>
          </div>
        </div>
        <div className="mt-5 space-y-4">
          <label className="input input-bordered flex items-center gap-2">
            Photo
            <input
              type="url"
              name="coffeeUrl"
              className="grow"
              defaultValue="Enter Coffee Photo URL"
            />
          </label>
          <button type="submit" className="btn btn-secondary w-full">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
