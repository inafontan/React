import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
  <header className="text-black	">
  <div className="container mx-auto flex flex-nowrap p-0 flex-col md:flex-row items-center" style={{fontFamily: 'monospace', fontSize: '15px'}}>
      <Link to='/' className="flex title-font font-medium items-center text-black mb-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-black p-2 bg-base-50 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      <span className="ml-3 text-xl">Venta de WhatsApp</span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base ">
      <Link to= '/info'  className="mr-5 hover:text-gray-900">Productos</Link>
      <Link to= '#' className="mr-5 hover:text-gray-900">Contacto</Link>
      <a className="mr-5 hover:text-gray-900"><CartWidget /></a> 
      </nav>
  </div>
  </header>
)
}
export default NavBar;