import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import Typed from "react-typed";
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import img3 from "../img3.jpg";
import img4 from "../img4.jpg";
import img6 from "../img6.jpg";
import img7 from "../img7.jpg";
import img8 from "../img8.jpg";

const slides = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
  {
    url: img4,
  },
  {
    url: img6,
  },
  {
    url: img7,
  },
  {
    url: img8,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const PrevSlide = () => {
    const isFirstslide = currentSlide === 0;
    const newSlide = isFirstslide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  const NextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };
  return (
    <div className="relative border-b-4 border-slate-600 pb-4 group">
      {/* //! The Image  */}
      <div className="w-full flex items-center justify-center relative h-10/12 blur-sm opacity-80 rounded-2xl bg-center bg-cover duration-500 h-full">
        <img
          className="h-10/12 blur-sm rounded-2xl bg-center bg-cover duration-500 w-8/12 h-full"
          // src="https://gate.ahram.org.eg/Media/News/2021/7/14/19_2021-637618585878648761-864.jpg"
          src={`${slides[currentSlide].url}`}
          // src={img1}
          alt="img1"
        />
      </div>
      {/* //! Cursors for sliding left and right */}
      <div className="hidder group-hover:block absolute top-[50%] transition ease-in-out  left-5 text-2xl rounded-full p-2 bg-slate-700 text-slate-50 opacity-80 hover:scale-110">
        <BsChevronCompactLeft
          onClick={PrevSlide}
          className="text-2xl  hover:cursor-pointer hover:text-3xl hover:scale-110 transition ease-in-out opacity-100"
        />
      </div>
      <div className="hidder group-hover:block absolute top-[50%] transition ease-in-out  right-5 text-2xl rounded-full p-2 bg-slate-700 text-slate-50 opacity-80 hover:scale-110">
        <BsChevronCompactRight
          onClick={NextSlide}
          className="text-2xl  hover:cursor-pointer hover:text-3xl hover:scale-110 transition ease-in-out opacity-100"
        />
      </div>
      {/* //! Text inside the image slider */}
      <div className="w-2/3 hover:cursor-pointer hover:scale-110 transition ease-in-out flex flex-col gap-y-2 items-center justify-center md:text-2xl  lg:text-4xl top-1/2 left-1/2 absolute font-bold -translate-x-1/2 -translate-y-1/2  shadow-2xl p-2 ">
        <p className="text-darkBlue shadow-2xl text-4xl twoCols:text-5xl font-standard font-bold">
          الشركة الوطنية للزراعات المحمية
        </p>
        <p>
          <Typed
            className=" text-slate-200 text-2xl bg-darkBlue p-2 rounded-lg "
            strings={[
              "NCPC",
              "National Company for Protected Cultivation",
              "جهاز مشروعات الخدمة الوطنية",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </p>
      </div>
    </div>
  );
};
export default Hero;
