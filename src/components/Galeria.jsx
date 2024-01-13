import { globo5, globo4, globo7, globo6} from '../assets/images'


const Galeria = () => {
  return (
  
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a  className="group" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/C0FwghyMLIT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={globo5}  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Miren esta belleza de deco! De Frozen para los 3 añitos 🧊❄️ Muy completo! con candybar, burbujas en la pile..</h3>
            
        </a>
        <a  className="group" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CseRK0vL7NC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={globo4}  alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Arreglo de La Sirenita!🧜🦀</h3>
            
        </a>
        <a className="group" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/C1zbN2qM9y-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={globo7}  alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Hermosa deco para los 18</h3>
            
        </a>
        <a  className="group" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/C07rqJLMpl7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={globo6}  alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Harry Potter Está deco superó nuestras expectativas, quedó divina!😍</h3>
            
        </a>

        </div>
    </div>
    </div>

  )
}

export default Galeria