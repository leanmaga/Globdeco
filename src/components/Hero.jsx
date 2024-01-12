import { neon2 } from "../assets/images"

const Hero = () => {
  return (
    <div className="w-full h-screen grid grid-cols-4 gap-4 ">

        <div className="col-span-2 flex flex-col justify-content content-center text-center items-center">

          <h1 className="text-white">Glob.deco</h1>
          <p className="text-white">Todo para tus fiestas y eventos</p>
          
        </div>

        <div className=" col-span-2">

          <img src={neon2} alt="neon"/>

        </div>

        <div className="col-span-4 flex justify-center content-center text-center items-center p-4">

          <button className="h-10 px-6 font-semibold rounded-md bg-primary-500 text-white m-4">Conversemos</button>
          <button className="h-10 px-6 font-semibold rounded-md border border-primary-400 text-white m-4 hover:bg-primary-300">Mis redes</button>
        
        </div>

      </div>
  )
}

export default Hero