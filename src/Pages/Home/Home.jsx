import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import PerCoffee from "../PerCoffee";

const Home = () => {
  const loaderData = useLoaderData();

  return (
    <div className="mt-10">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="text-5xl font-semibold">
        our Coffee Stock is now : {loaderData.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {loaderData.map((perData) => (
          <PerCoffee key={perData._id} perData={perData}></PerCoffee>
        ))}
      </div>
    </div>
  );
};

export default Home;
