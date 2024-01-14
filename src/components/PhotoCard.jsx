

const PhotoCard = ({title, subtitle, parrafo, imagenPrincipal, imagenenSecundariaUno, imagenSecundariaDos}) => {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-3">

        {/* Primera mitad */}
        <div className="relative justify-center p-3 col-start-1 row-start-1 flex flex-col rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1 lg:col-span-1">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">{title}</h1>
          <p className="text-sm leading-4 font-medium text-white lg:text-slate-500 dark:lg:text-slate-400">{subtitle}</p>

          <p className="mt-4 text-sm leading-6 text-white dark:lg:text-slate-400">
            {parrafo} 
          </p>
        </div>

        {/* Segunda mitad */}
        <div className="flex col-start-1 row-start-1 lg:col-span-2 gap-10">
          <div className="flex justify-center content-center flex-wrap">
            <video autoPlay loop muted playsInline className="w-[250px] h-[500px] object-cover rounded-lg" loading="lazy">
              <source src={imagenPrincipal} type="video/mp4" />
              Tu navegador no admite el elemento de video.
            </video>
          </div>

          <div className="flex flex-col mt-4 space-y-4">
            <img src={imagenenSecundariaUno} alt="" className="w-[200px] h-[230px] object-cover rounded-lg" loading="lazy"/>
            <img src={imagenSecundariaDos} alt="" className="w-[200px] h-[230px] object-cover rounded-lg" loading="lazy"/>
          </div>
        </div>

      </div>

    </main>

  )
}

export default PhotoCard