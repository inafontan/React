import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header className="text-gray-800 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Inicio</a>
      <a className="mr-5 hover:text-gray-900">Productos</a>
      <a className="mr-5 hover:text-gray-900">Contacto</a>
      <a className="mr-5 hover:text-gray-900"><CartWidget /></a> 
     
    </nav>
    
  </div>
        </header>
    )
}
export default NavBar;