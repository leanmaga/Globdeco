import { deco1, deco2, globo1, globo2, globo3, puff1 } from "../assets/images"
import globdeco from '../assets/globdeco.mp4'

const Banner = () => {
  return (
    
    <div className="relative overflow-hidden bg-white h-screen">
        <div className="flex flex-col items-start md:justify-center lg:md:justify-center content-start h-screen sm:h-auto lg:h-screen ">
            <div className="relative max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                
                <div className="sm:max-w-lg">
                    
                    <h1 className="lg:text-8xl font-bold tracking-tight text-gray-900 text-4xl p-4">Glob.deco</h1>
                        
                    <p className="mt-4 text-xl text-gray-500 p-4">
                        🎈Decoración de globos<br />
                        🎈Globos personalizados<br />
                        🎈Arcos de globos<br />
                        🎈Globos con helio<br />
                        🎈Alquiler de candy bar<br />
                    </p>

                    <a href="https://api.whatsapp.com/send?phone=5491121621988&text=Hola,%20gracias%20por%20comunicarte." target="_blank" rel="noopener noreferrer" className="m-4 inline-block rounded-md border border-transparent bg-primary-500 px-8 py-3 text-center font-medium text-white hover:bg-primary-300">Whatsapp</a>
                   
                </div>

                <div className="items-center">
                    <div className="mt-10">
                    
                        <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                            
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                            
                                <div className="flex items-center space-x-2 lg:space-x-8">
                                    
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-4 lg:gap-y-8">
                                    
                                        <div className="h-50 lg:h-64  w-32 lg:w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                            <img src={globo1} alt="" className="h-full w-full object-cover object-center"/>
                                        </div>
                                        
                                        <div className="h-50 lg:h-64  w-32 lg:w-44 overflow-hidden rounded-lg">
                                            <img src={puff1} alt="" className="h-full w-full object-cover object-center"/>
                                        </div>

                                    </div>

                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                    
                                    <div className="hidden sm:block h-50 lg:h-64 w-32 lg:w-44 overflow-hidden rounded-lg">
                                        <img src={deco1} alt="" className="h-full w-full object-cover object-center" />
                                    </div>

                                        
                                        <div className="h-50 lg:h-64  w-32 lg:w-44 overflow-hidden rounded-lg">
                                        
                                        <video width="640" height="360" autoPlay loop muted playsInline>
                                            <source src={globdeco} type="video/mp4" />
                                            Tu navegador no admite el elemento de video.
                                        </video>
  
                                        </div>
                                        
                                        <div className="h-50 lg:h-64  w-32 lg:w-44 overflow-hidden rounded-lg">
                                            <img src={globo2} alt="" className="h-full w-full object-cover object-center"/>
                                        </div>

                                    </div>
                                    
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                    
                                        <div className="h-50 lg:h-64  w-32 lg:w-44 overflow-hidden rounded-lg">
                                            <img src={deco2} alt="" className="h-full w-full object-cover object-center"/>
                                        </div>
                                        
                                        <div className="h-50 lg:h-64  w-32 lg:w-44 overflow-hidden rounded-lg">
                                            <img src={globo3} alt="" className="h-full w-full object-cover object-center"/>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                         </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner