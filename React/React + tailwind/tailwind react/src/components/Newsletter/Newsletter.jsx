
const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-6">
            <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">
                Want tips & tricks to optimize your 
            </h1>
            <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full">
                <input className = "p-3 rounded-lg text-black flex w-full"type="email" placeholder="Enter Email" />
                <button className="bg-[#00df9a] w-[200px] rounded-sm font-medium ml-4 px-6 my-6 py-3  text-black">Notify Me</button>

            </div>
            <p>We care about protection of your data. Read our <span className="text-[#00df9a]">privacy policy.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
