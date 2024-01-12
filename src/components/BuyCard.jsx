

import Division from './Division'

const BuyCard = ({imagen}) => {
  return (
    
    <div className="grid grid-cols-2 m-4 p-4 gap-4">

      <div className="col-span-1 items-center w-auto relative p-4">
        <img src={imagen} alt="aro de globos celestes,grises y blancos" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
      </div>
      
      <form className="col-span-1 p-4">
        
        <div className="flex flex-wrap justify-between text-justify gap-4">
          
          <h1 className="flex font-medium text-white gap-4 md:text-center">
            Aro de Globos 
            <span>
              <button className="flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </span>
          </h1>
          
          <h2 className="flex font-medium text-slate-400">
            Colores personzalizados
          </h2>
        </div>

        <Division/>

        <div className="flex justify-center content-center items-center font-medium">
          
          <div className="flex flex-col justify-center content-center gap-4">
            
            <button className="m-2 h-10 px-6 font-semibold rounded-full bg-secondary-600 text-white hover:bg-secondary-400" type="submit">
              Galería
            </button>
            
            <button className="m-2 h-10 px-6 md:px-4 font-semibold rounded-full border border-secondary-600 text-white hover:bg-secondary-400" type="button">
              Pedí el tuyo
            </button>

          </div>
          
        </div>
        
      </form>

    </div>
  )
}

export default BuyCard