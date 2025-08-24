import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar=()=>{

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <header className="bg-slate-50 sticky top-0">
            <section className="h-20 container mx-auto content-center">
            <nav className="grid grid-cols-2">
                <div className="w-24 h-10 mx-5">
                    <img src="image/illustration/Group 19 1.svg" alt=""/>
                </div>
                <div className="w-10 h-10 text-center content-center lg:hidden">
                    <a href="" onClick={() => setIsOpen(!isOpen)} ><i class="bi bi-list"></i></a>
                </div>
            {/* Mobile Dropdown */}
                {isOpen && (
        <div className="lg:hidden bg-blue-400 px-4 pb-4 space-y-2">
            <ul>
                    <li>
                        <Link to="/Home" className="text-base font-semibold hover:text-sky-600">Home</Link>
                    </li>
                    <li>
                        <Link to="/Service" className="text-base font-semibold hover:text-sky-600">Services</Link>
                    </li>
                    <li>
                        <Link to="/Ourwork" className="text-base font-semibold hover:text-sky-600">Our Work</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-base font-semibold hover:text-sky-600">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="text-base font-semibold hover:text-sky-600">Contact</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-base font-semibold hover:text-sky-600">Careers</Link>
                    </li>
            </ul>
        </div>
      )}
                <ul className="hidden lg:flex justify-evenly">
                    <li>
                        <Link to="/Home" className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500">Home</Link>
                    </li>
                    <li>
                        <Link to="/Service" className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500">Services</Link>
                    </li>
                    <li>
                        <Link to="/Ourwork" className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500">Our Work</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500">Contact</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500">Careers</Link>
                    </li>
                </ul>
            </nav>
            </section>
        </header>
        </>
    )
}

export default Navbar;