const PerCoffee = ({ perData }) => {
  const {
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
            <button className="btn btn-secondary">Edit</button>
            <button className="btn btn-square">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerCoffee;
