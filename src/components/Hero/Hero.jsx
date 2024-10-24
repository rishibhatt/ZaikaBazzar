import React from "react";
import hero from "../../assets/images/Hero.jpeg";
import biryani from "../../assets/images/biryani.jpeg";
import rice from "../../assets/images/rice.jpeg";
import dosa from "../../assets/images/dosa.jpeg";
import pavbhaji from "../../assets/images/pavbhaji.jpeg";
import noodles from "../../assets/images/noodles.jpeg";
const Hero = () => {
  return (
    <>
      <div className=" mt-10 sm:px-10 w-full">
        <h2 className="text-4xl  text-center font-raleway font-extrabold  text-[#363636]">
          Craving Flavors? Dive into{" "}
          <span className="text-cyan-800">Zaika!</span>
        </h2>
        <div className="flex flex-wrap flex-col lg:flex-row justify-around items-center font-lato">
          <img src={hero} className="mt-10 md:h-1/2 sm:w-[60%] rounded-xl " />
          <div className="flex  flex-wrap flex-col mt-10 justify-around w-full lg:w-[30%] items-center">
            <div className="flex p-2">
              <img src={biryani} className="h-20 rounded-2xl" />
              <div className="p-1.5 flex-col ">
                <h3 className="ml-2 text-sm font-semibold">Biryani :</h3>
                <p className="ml-2 p-1 text-xs text-gray-700">
                  Feast on layers of fragrant rice, tender meat, and bold
                  spices—Biryani that’s royalty in every bite!
                </p>
              </div>
            </div>
            <div className="flex p-2">
              <img src={dosa} className="h-20 rounded-2xl" />
              <div className="p-1.5 flex-col ">
                <h3 className="ml-2 text-sm font-semibold">Dosa :</h3>
                <p className="ml-2 p-1 text-xs text-gray-700">
                  Crispy, golden, and perfectly spiced—our Dosa is a savory
                  delight, made fresh and delivered hot!
                </p>
              </div>
            </div>
            <div className="flex p-2">
              <img src={rice} className="h-20 rounded-2xl" />
              <div className="p-1.5 flex-col ">
                <h3 className="ml-2 text-sm font-semibold">Rice Dal :</h3>
                <p className="ml-2 p-1 text-xs text-gray-700">
                  Comfort in every bite—our Rice & Dal is wholesome, flavorful,
                  and just like home-cooked goodness!
                </p>
              </div>
            </div>
            <div className="flex p-2">
              <img src={pavbhaji} className="h-20 rounded-2xl" />
              <div className="p-1.5 flex-col ">
                <h3 className="ml-2 text-sm font-semibold">Pav Bhaji :</h3>
                <p className="ml-2 p-1 text-xs text-gray-700">
                  Bold, buttery, and packed with flavor—our Pav Bhaji is street
                  food at its finest of Indian street food.
                </p>
              </div>
            </div>
            <div className="flex p-2">
              <img src={noodles} className="h-20 rounded-2xl" />
              <div className="p-1.5 flex-col ">
                <h3 className="ml-2 text-sm font-semibold">Noodles :</h3>
                <p className="ml-2 p-1 text-xs text-gray-700">
                  Stir-fried to perfection—our Noodles are a tasty tangle of
                  spices, veggies, and flavor! Decliciously Good
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="p-10 border  mt-5 w-full text-center rounded-2xl bg-[#D35400] text-white  flex flex-col sm:flex-row justify-center text-wrap flex-wrap ">
          <h2 className="border-b-2 sm:border-r-2 sm:border-b-0 text-3xl text-center p-2 sm:w-1/3 font-poppins">
            Taste the Flavors of Tradition
          </h2>
          <p className="p-2  text-center text-xs  sm:w-2/3 text-[#e8ecef] font-poppins">
            Bringing you the best of local and exotic cuisines, made with
            authentic recipes and fresh ingredients. Delivered straight to your
            door, hot and ready to be savored!
            <br /> Explore our menu for a journey of flavors, from street food
            classics to restaurant-style specialties.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
