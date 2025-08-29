// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Logo from "../Assets/PixelConnectLogo.jpeg";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <header className="bg-slate-50 sticky top-0 relative z-20">
//         <section className="h-20 container mx-auto content-center">
//           <nav className="grid grid-cols-2 align-center">
//             <div className="w-32 h-10 mx-5">
//               <img src={Logo} alt="" />
//             </div>
//             <div className="w-10 h-10 text-center content-center lg:hidden">
//               <a href="" onClick={() => setIsOpen(!isOpen)}>
//                 <i class="bi bi-list"></i>
//               </a>
//             </div>
//             {/* Mobile Dropdown */}
//             {isOpen && (
//               <div className="lg:hidden bg-blue-400 px-4 pb-4 space-y-2">
//                 <ul>
//                   <li>
//                     <a
//                       href="/Home"
//                       className="text-base font-semibold hover:text-sky-600"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/Service"
//                       className="text-base font-semibold hover:text-sky-600"
//                     >
//                       Services
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/Ourwork"
//                       className="text-base font-semibold hover:text-sky-600"
//                     >
//                       Our Work
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       className="text-base font-semibold hover:text-sky-600"
//                     >
//                       About
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/Contact"
//                       className="text-base font-semibold hover:text-sky-600"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/Career"
//                       className="text-base font-semibold hover:text-sky-600"
//                     >
//                       Careers
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             )}
//             <ul className="hidden lg:flex justify-evenly">
//               <li>
//                 <a
//                   href="/Home"
//                   className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#service"
//                   className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/Ourwork"
//                   className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
//                 >
//                   Our Work
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/"
//                   className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/Contact"
//                   className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/Career"
//                   className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
//                 >
//                   Careers
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </section>
//       </header>
//     </>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../Assets/PixelConnectLogo.jpeg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-slate-50 sticky top-0 relative z-20">
        <section className="h-20 container mx-auto content-center">
          <nav className="grid grid-cols-2 align-center">
            <div className="w-32 h-10 mx-5">
              <img src={Logo} alt="" />
            </div>
            <div
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 text-center content-center lg:hidden"
            >
              <a href="" onClick={() => setIsOpen(!isOpen)}>
                <i class="bi bi-list"></i>
              </a>
            </div>
            {/* Mobile Dropdown */}
            {isOpen && (
              <div className="lg:hidden bg-blue-400 px-4 pb-4 space-y-2">
                <ul>
                  <li>
                    <a
                      href="/"
                      className="text-base font-semibold hover:text-sky-600"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Service"
                      className="text-base font-semibold hover:text-sky-600"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Ourwork"
                      className="text-base font-semibold hover:text-sky-600"
                    >
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base font-semibold hover:text-sky-600"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact"
                      className="text-base font-semibold hover:text-sky-600"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers"
                      className="text-base font-semibold hover:text-sky-600"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <ul className="hidden lg:flex justify-evenly">
              <li>
                <a
                  href="/"
                  className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#ourwork"
                  className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-base font-semibold hover:text-sky-600 hover:border-b-2 border-indigo-500"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Navbar;
