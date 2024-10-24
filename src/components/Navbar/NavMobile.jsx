import React, { useEffect, useRef } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
export const NavMobile = ({ closeMenu, navMenu, menuOpen, navLink }) => {
  const gsapRef = useRef();
  useGSAP(() => {
    gsap.to(gsapRef.current, {
      display: "flex",
      width: "250px",
      duration: 0.2,
      ease: "back.out(1.7)",
    });
  });
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <>
      <div className="sm:hidden">
        <div
          ref={gsapRef}
          className="bg-white shadow-2xl  h-full absolute w-0 right-0 top-0 hidden p-5  justify-between transition-all duration-1000 ease-out "
        >
          <div className="text-2xl mt-5 p-3 ">
            {" "}
            <button
              className="bg-[#d35400] rounded-2xl p-2 justify-start"
              onClick={closeMenu}
            >
              <MdOutlineRestaurantMenu className="text-white" />
            </button>
          </div>
          <div className="h-full">
            <ul className="flex flex-col h-[70%] flex-wrap  justify-around mt-4 text-right">
              {navMenu.map((menu, index) => (
                <li
                  key={index}
                  className="p-3 text-3xl text-[#2c3e50] font-extrabold hover:border-b-2 border-b-[#d35400]"
                >
                  <Link to={navLink[index]} onClick={closeMenu}>
                    {menu}{" "}
                  </Link>
                </li>
              ))}
              <li className="">
                <button className="bg-[#d35400] hover:bg-[#e67e22] text-[#ffffff] p-3 text-3xl font-bold">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
