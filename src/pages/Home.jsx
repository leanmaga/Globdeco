import { globo1, globo2, sillon } from "../assets/images";
import Banner from "../components/Banner";
import BuyCard from "../components/BuyCard";
import Division from "../components/Division";
import Galeria from "../components/Galeria";
import PhotoCard from "../components/PhotoCard";

const Home = () => {
  
  
  return (
    <section className="w-full h-full">
     
      <Banner/>

      <Division/>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:cols-2">
        <BuyCard imagen={globo1}/>
        <BuyCard imagen={globo2}/> 
      </div>
      
      <Division/>

      <PhotoCard 
        title={'Sillón Trono👑'}
        subtitle={'Ideal para sector de fotos!'}
        parrafo={'Dale un sillon especial al rey o reina de la fiesta'}
        imagenPrincipal={sillon}
        imagenenSecundariaUno={sillon}
        imagenSecundariaDos={sillon}
      />

      <Division/>

      <Galeria/>

      <PhotoCard
        title={'Sillón Trono👑'}
        subtitle={'Ideal para sector de fotos!'}
        parrafo={'Dale un sillon especial al rey o reina de la fiesta'}
        imagenPrincipal={sillon}
        imagenenSecundariaUno={sillon}
        imagenSecundariaDos={sillon}
      />

      <Division/>

      <PhotoCard 
        title={'Sillón Trono👑'}
        subtitle={'Ideal para sector de fotos!'}
        parrafo={'Dale un sillon especial al rey o reina de la fiesta'}
        imagenPrincipal={sillon}
        imagenenSecundariaUno={sillon}
        imagenSecundariaDos={sillon}
      />

      <Division/>

      <PhotoCard
        title={'Sillón Trono👑'}
        subtitle={'Ideal para sector de fotos!'}
        parrafo={'Dale un sillon especial al rey o reina de la fiesta'}
        imagenPrincipal={sillon}
        imagenenSecundariaUno={sillon}
        imagenSecundariaDos={sillon}
      />

      <Division/>

    </section>

  );
};

export default Home;