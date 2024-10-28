import Laptop from "../../assets/laptop.jpeg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className= "w-[500px] mx-auto my-4 rounded-lg "src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">Data analytics Dashboard</p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus,
            nunc sed finibus feugiat, justo odio consectetur nunc, sed pulvinar
            lectus ex vel ex. Nullam vel velit id tellus laoreet vestibulum.
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-sm font-medium my-6 py-2 mx-auto md:mx-0 bg-black">Get Started</button>
          </div>
      </div>
    </div>
  );
};

export default Analytics;
