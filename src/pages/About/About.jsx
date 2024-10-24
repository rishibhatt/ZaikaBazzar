import React from "react";

const About = () => {
  return (
    <div className=" mt-10 sm:px-10 w-full">
      {" "}
      <h2 className="text-4xl   text-center font-raleway font-extrabold  text-[#363636]">
        About ZaikaBazzar
      </h2>
      <div className="p-10 flex justify-between flex-wrap flex-col gap-8 sm:flex-row">
        <div className="border shadow-xl p-5 w-full sm:w-1/2 font-lato">
          At <span className="text-[#D35400] font-semibold">ZaikaBazzar</span>,
          we bring the rich and diverse flavors of India straight to your
          doorstep. Our mission is to connect food lovers with the best local
          eateries, offering an authentic culinary experience that celebrates
          India's vibrant food culture. Whether you're craving a hearty Biryani,
          a flavorful Paneer Tikka, or a classic Butter Chicken, we've got you
          covered! <br />
          <br />
          <span className="text-[#D35400] font-semibold">ZaikaBazzar</span> is
          not just about food—it’s about creating memories. We believe in
          delivering not only fresh and delicious meals but also the essence of
          hospitality and warmth that Indian cuisine is known for. Our platform
          makes ordering food simple, reliable, and incredibly tasty. <br />
          <br />{" "}
          <span className="text-[#2c3e50] font-semibold">
            {" "}
            Why Choose ZaikaBazzar?
          </span>{" "}
          <br />
          <br />
          <ul>
            <li>
              <span className="font-semibold">Wide Variety:</span> From street
              food delights to gourmet meals, we offer a wide range of dishes
              that cater to every palate.
            </li>
            <br />
            <li>
              <span className="font-semibold">Local Favorites: </span>We partner
              with your favorite local restaurants, ensuring you always get the
              best quality meals.
            </li>
            <br />
            <li>
              <span className="font-semibold">Fast & Convenient:</span> With
              easy online ordering and quick delivery, enjoying your favorite
              dishes has never been easier.
            </li>
          </ul>
          <br /> <br />
          Join us on a journey to explore the rich tastes of India, one bite at
          a time. Welcome to ZaikaBazzar—where every meal tells a story!
        </div>
        <div className="border shadow-xl font-lato p-5 w-full sm:w-[40%] h-1/2">
          <h3 className="text-lg font-bold font-lato text-center">
            About Rishab Bhatt - Developer of ZaikaBazzar
          </h3>
          <br />
          <p>
            Rishab Bhatt, the mind behind ZaikaBazzar, is a passionate tech
            enthusiast and food lover with a vision to revolutionize the way
            people experience Indian cuisine. With 2.10 years of experience as a
            frontend developer, Rishab has combined his technical expertise with
            his love for food to create a seamless and delightful platform that
            connects customers with the best local eateries. Rishab’s dedication
            to creating a user-friendly and efficient food delivery service is
            what drives ZaikaBazzar’s success. He understands the value of
            quality, speed, and convenience, which is why ZaikaBazzar is
            designed to make food ordering easy, reliable, and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
