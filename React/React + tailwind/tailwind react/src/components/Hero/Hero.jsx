import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] h-screen w-full mx-auto text-center flex flex-col">
        <p className="text-[#00df9a] font-bold pb-2"> Growing with data analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4" >Grow with data</h1>
        <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible financing for</p>
            <ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                strings={["BTC", "SASS", "BTB"]}
                typeSpeed={50}
                backSpeed={50}
                loop>

                </ReactTyped>
        </div>
        <p className="md:text-2xl text-xl text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-sm font-medium my-6 py-2 mx-auto text-black">Get Started</button>
        
      </div>
    </div>
  )
}

export default Hero
