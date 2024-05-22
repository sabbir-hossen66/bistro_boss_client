import { AuthContext } from "@/Provider/AuthProvider";
import { IoMdCart } from "react-icons/io";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UseCart from "@/hooks/UseCart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  const [cart] = UseCart()

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { })
  }

  return (
    <div>
      <nav className="relative bg-white shadow ">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a href="#">
                <img
                  className="w-auto h-6 sm:h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt=""
                />
              </a>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
                } lg:opacity-100 lg:translate-x-0`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <Link to={'/'}><a className="px-3 py-2 mx-3 mt-2">Home</a></Link>
                <Link to={'/menu'}><a className="px-3 py-2 mx-3 mt-2">menu</a></Link>
                <Link to={'/order'}><a className="px-3 py-2 mx-3 mt-2">order</a></Link>


                {
                  user ?
                    <>
                      {/* <span>  {user?.displayName}</span> */}
                      <button onClick={handleLogOut}>Logout</button>
                    </>
                    :
                    <>
                      <Link to={'/login'}><a className="px-3 py-2 mx-3 mt-2">Login</a></Link>
                    </>
                }

              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <Link to={'/dashboard/cart'}>
                  <button className="flex">
                    <IoMdCart />
                    <div className="badge badge-secondary">+{cart.length}</div>
                  </button>
                </Link>
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                    Khatab wedaa
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Header;