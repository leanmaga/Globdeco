const Footer =  () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                <div>
                    <p className="text-lg font-semibold">Glob.deco</p>
                    <p className="text-sm">Gonzalez Catan, Buenos Aires Argentina</p>
                </div>

                <div>
                    <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
                    <li><a href="#" className="hover:text-gray-400">Acerca de</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
                    </ul>
                </div>
                </div>

                <div className="mt-4">
                <p className="text-sm">&copy; 2024 PatagoniaScript. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>

        )
}

export default Footer