import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border border-red-500 px-4 md:px-6 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* Hamburger Icon */}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-red-600"}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/choice"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              Choice
            </NavLink>
          </ul>
        </div>
        <NavLink to="/" className="lg:text-xl md:text-lg text-base">
          Gadget Heaven
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:flex md:flex md:gap-2 gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/choice"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
            }
          >
            Choice
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <div className="p-2 rounded-full text-xl">
            <IoMdCart />
          </div>
          <div className="p-2 rounded-full text-xl">
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
