import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] h-screen w-full mx-auto text-center flex flex-col">
        <p className="text-[#00df9a] font-bold p-2"> Growing with data analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6" >Grow with data</h1>
        <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible financing for</p>
            <ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
                strings={["BTC", "SASS", "BTB"]}
                typeSpeed={50}
                backSpeed={50}
                loop>

                </ReactTyped>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
