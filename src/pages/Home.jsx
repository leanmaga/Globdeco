import { globo1, globo2, sillon, arreglo2, arreglo3, quinceled } from "../assets/images";
import Banner from "../components/Banner";
import BuyCard from "../components/BuyCard";
import Division from "../components/Division";
import Galeria from "../components/Galeria";
import PhotoCard from "../components/PhotoCard";
import { globo5, globo4, globo7, globo6, img1, img2,img3,img4} from '../assets/images'

import arreglo from '../assets/arreglo.mp4'

import quince from '../assets/quince.mp4'

const Home = () => {
  
  
  
  return (
    <section className="w-full h-full">
     
      <Banner/>

      
      <PhotoCard 
        title={'Arreglo de globos personalizado'}
        subtitle={'Miren la hermosa deco que realizamos para los 15 de Sofía💚🦋!'}
        parrafo={'También realizamos centros de mesa y columnas'}
        imagenPrincipal={arreglo}
        imagenenSecundariaUno={arreglo2}
        imagenSecundariaDos={arreglo3}
      />
      
      
      <Galeria
        img1={globo5}
        img2={globo4}
        img3={globo7}
        img4={globo6}
        titulo1={'Miren esta belleza de deco! De Frozen para los 3 añitos 🧊❄️ Muy completo! con candybar, burbujas en la pile..'}
        titulo2={'Arreglo de La Sirenita!🧜🦀'}
        titulo3={'Hermosa deco para los 18'}
        titulo4={'Harry Potter Está deco superó nuestras expectativas, quedó divina!😍'}
        red1={"https://www.instagram.com/p/C0FwghyMLIT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
        red2={"https://www.instagram.com/p/CseRK0vL7NC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
        red3={"https://www.instagram.com/p/C1zbN2qM9y-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
        red4={"https://www.instagram.com/p/C07rqJLMpl7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
      />


      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:cols-2">
        <BuyCard imagen={globo1}/>
        <BuyCard imagen={globo2}/> 
      </div>


      <Galeria
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        titulo1={'Hoy realizamos una deco para Belu que cumplió 15 con mariposas💗'}
        titulo2={'Alquiler de 10 Puffs y Mesa ❤️‍🔥'}
        titulo3={'Hermosa deco para Todas tus fiestas'}
        titulo4={'Deco de Chanchita🐷'}
        red1={"https://www.instagram.com/p/CkUPZ1TsADw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
        red2={"https://www.instagram.com/p/CxlXy88RcTJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
        red3={"https://www.instagram.com/reel/Cu-sGurr1Id/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
        red4={"https://www.instagram.com/p/CuxS4yIvhzU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
     
      />

      <PhotoCard
        title={'Sillón Trono👑'}
        subtitle={'Ideal para sector de fotos!'}
        parrafo={'Dale un sillon especial al rey o reina de la fiesta'}
        imagenPrincipal={quince}
        imagenenSecundariaUno={sillon}
        imagenSecundariaDos={quinceled}
      />

      <Division/>

      

    </section>

  );
};

export default Home;