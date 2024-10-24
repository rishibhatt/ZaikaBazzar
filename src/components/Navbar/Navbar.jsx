import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { NavMobile } from "./NavMobile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navMenu = ["Home", "Catalog", "About", "Contact"];
  const navLink = ["/", "/catalog", "/about", "/contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(
    <CgMenuGridR className="text-white " />
  );
  const toggleMenu = () => {
    menuOpen == false
      ? setMenuIcon(<MdOutlineRestaurantMenu className="text-white" />)
      : setMenuIcon(<CgMenuGridR className="text-white " />);
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="p-5 pb-2 flex justify-between relative shadow-lg">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="h-24 p-1" />
          </Link>
        </div>
        <div className="w-[70%]  hidden sm:block">
          <ul className="flex flex-wrap  justify-around mt-5">
            {navMenu.map((menu, index) => (
              <li
                key={index}
                className="p-3 text-[#2c3e50] font-extrabold hover:border-b-2 border-b-[#d35400]"
              >
                <Link to={navLink[index]}> {menu} </Link>
              </li>
            ))}
            <li className="">
              <button className="bg-[#d35400] hover:bg-[#e67e22] text-[#ffffff] p-3 font-bold">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <div className="text-2xl mt-5 p-3 sm:hidden">
          <button className="bg-[#d35400] rounded-2xl p-2" onClick={toggleMenu}>
            {menuIcon}
          </button>
        </div>
      </div>
      {menuOpen && (
        <NavMobile
          closeMenu={toggleMenu}
          navMenu={navMenu}
          navLink={navLink}
          menuOpen={menuOpen}
        />
      )}
    </>
  );
};

export default Navbar;
