import React, { useEffect, useState } from "react";
import { fetchApi } from "../../utils/utils";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { RiTimeFill } from "react-icons/ri";

const FoodList = () => {
  const [foodData, setFoodData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const Api = "https://zaikabazzarapi.onrender.com/homepage";
      const response = await fetch(Api);
      const data = await response.json();
      setFoodData(data);
      setFilterData(data);
      console.log(foodData);
    };
    fetchApi();
  }, []);
  const handleSearch = (e) => {
    const filter = foodData.filter((foodData) =>
      foodData.foodName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterData(filter);
    console.log(filter);
  };
  if (foodData === null) {
    const shimmerCard = [];
    for (let i = 1; i <= 10; i++) {
      shimmerCard.push(
        <div key={i} className="p-4">
          <div>
            <div className="h-48 w-60 bg-gray-200 rounded-t-lg"></div>
          </div>
          <div className="shadow-md h-32 w-60 p-4 bg-gray-300"></div>
        </div>
      );
    }
    return (
      <>
        <h2 className="  p-10 mt-10 text-center text-2xl font-raleway font-bold">
          Discover Our Delicious Offerings
        </h2>
        <div className="p-10  flex flex-wrap justify-center gap-10">
          {shimmerCard}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="  p-10 mt-10 text-center text-2xl font-raleway font-bold">
          Discover Our Delicious Offerings
        </h2>
        <div className="text-center bg-gray-300 h-10 w-72 flex items-center justify-center border mx-auto p-5 rounded-3xl ">
          <BsFillSearchHeartFill />
          <input
            className="bg-gray-300 h-10 w-72 p-5 focus:outline-none"
            placeholder="Search Food..."
            onChange={handleSearch}
          />
        </div>
        <div className="p-10  flex flex-wrap justify-center gap-10">
          {filterData.map((foodData) => (
            <div
              key={foodData.foodId}
              className="p-4 hover:scale-90 hover:transition duration-100	delay-75	"
            >
              <div>
                <img
                  className="h-48 w-60 object-fill rounded-t-lg"
                  src={foodData.image}
                />
              </div>
              <div className="shadow-md w-60  p-4">
                <div className="">
                  <h3 className="text-xl font-semibold font-poppins">
                    {foodData.foodName}
                  </h3>
                  <div className="text-sm font-poppins font-semibold">
                    <span>₹{foodData.priceForTwo} for Two</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span>Restaurant name</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex text-sm gap-1">
                    <RiTimeFill className="text-lg text-green-800" />
                    {foodData.deliveryTime}
                  </span>
                  <span className="flex text-sm gap-1 ">
                    <FaStar className="text-yellow-400 text-lg" />
                    {foodData.averageRating}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {filterData.length == 0 ? (
            <div className="text-xl font-bold text-[#d35400]">
              Sorry, we couldn't find the item you're looking for :({" "}
              <span className="text-[#2c3e50] text-lg">
                Try exploring our other delicious options!
              </span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </>
    );
  }
};

export default FoodList;
