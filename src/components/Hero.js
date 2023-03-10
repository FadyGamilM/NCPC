import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Typed from "react-typed";

const slides = [
	{
		url: "https://gate.ahram.org.eg/Media/News/2021/7/14/19_2021-637618585878648761-864.jpg",
	},
	{
		url: "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.6435-9/131144105_422624392452083_1599017125498183165_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=IpwyZarC9ucAX9f3Wia&_nc_ht=scontent-hbe1-1.xx&oh=00_AfAQhuKZxBoi5N_J1YqeYjgdUs4C_FYEe6veTZ2KOQuOXA&oe=6432992C",
	},
	{
		url: "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.6435-9/71136482_127476365300222_579715040433668096_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=cpkyTtY8X2sAX-KkDeg&_nc_ht=scontent-hbe1-1.xx&oh=00_AfBFDWaEAbzW_ufrleHpnKaJqrKAUnuLUMW9YJ09SAwYIQ&oe=6432A7B1",
	},
	{
		url: "https://scontent.fcai20-2.fna.fbcdn.net/v/t1.6435-9/71871370_127476141966911_7806580312950964224_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=RVXIEGv3xlkAX_QLGOc&_nc_ht=scontent.fcai20-2.fna&oh=00_AfCIQaeIYcDOL6CTP2PD9XRt7dFQazJ0PlzOH7s9f2P3Vg&oe=6432A135",
	},
	{
		url: "https://scontent.fcai20-2.fna.fbcdn.net/v/t1.6435-9/70462679_120086712705854_1670977376063848448_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=yCUSxHDMtkwAX9yBKlw&_nc_ht=scontent.fcai20-2.fna&oh=00_AfCUdsJdupAN7wr1Am7PLeEr-Bwdta_1grkmEx8Xp2vvfw&oe=6432AE6A",
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
			<div className="w-full flex items-center justify-center relative h-10/12 blur-sm rounded-2xl bg-center bg-cover duration-500 h-full">
				<img
					className="h-10/12 blur-sm rounded-2xl bg-center bg-cover duration-500 w-8/12 h-full"
					// src="https://gate.ahram.org.eg/Media/News/2021/7/14/19_2021-637618585878648761-864.jpg"
					src={`${slides[currentSlide].url}`}
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
			<div className="hover:cursor-pointer hover:scale-110 transition ease-in-out flex flex-col gap-y-2 items-center justify-center md:text-2xl  lg:text-4xl top-1/2 left-1/2 absolute font-bold -translate-x-1/2 -translate-y-1/2  shadow-2xl p-2 ">
				<p>الشركة الوطنية للزراعات المحمية</p>
				<p>
					<Typed
						className="text-slate-800 text-2xl"
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
