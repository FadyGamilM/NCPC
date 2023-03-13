import React from "react";
import logo from "../ncpcLogo.png";

// 6/2 الحي الثاني المنطقة الثانية التجمع الخامس*/

const Header = () => {
  return (
    // <div className="border-b-4 border-slate-600 mb-8 pb-2 grid grid-cols-2 text-center">
    <div className="bg-darkBlue px-2 flex justify-between text-center items-center  w-full rounded-lg top-0 sticky">
      {/*//! Logo */}
      <div className="bg-white m-4 opacity-90 rounded-3xl">
        <img
          className="w-62 h-14 shadow-xl rounded-lg hover:cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      {/*//! Menu */}
      <div className=" flex items-center text-center justify-center">
        <ul className="flex gap-8 pr-4">
          <a href="#contact">
            <li className="shadow-xl p-2 rounded-2xl bg-darkBlue font-standard text-slate-50 text-xl font-bold cursor-pointer hover:scale-110 transition ease-in-out hover:underline hover:underline-offset-8">
              تواصل معنا
            </li>
          </a>

          <a href="#sectors">
            <li className="shadow-xl p-2 rounded-2xl bg-darkBlue font-standard text-slate-50 text-xl font-bold cursor-pointer  hover:scale-110 transition ease-in-out hover:underline hover:underline-offset-8">
              منافذ بيع الشركة
            </li>
          </a>

          <a href="#sectors">
            <li className="shadow-xl p-2 rounded-2xl bg-darkBlue font-standard text-slate-50 text-xl font-bold cursor-pointer  hover:scale-110 transition ease-in-out hover:underline hover:underline-offset-8">
              قطاعات الشركة
            </li>
          </a>

          <a href="#whoWeAre">
            <li className="shadow-xl p-2 rounded-2xl bg-darkBlue font-standard text-slate-50 text-xl font-bold cursor-pointer  hover:scale-110 transition ease-in-out hover:underline hover:underline-offset-8">
              من نحن{" "}
            </li>
          </a>
        </ul>
      </div>

      {/* //! Mobile Menu icon */}
      {/* <div>
				<AiOutlineMenu className="font-bold text-3xl hover:scale-110 transition ease-in-out hover:cursor-pointer" />
			</div> */}

      {/* //! Mobile Menu Navigation */}
      {/* <div className="fixed bg-gray-500 h-screen pt-16 border-r-2 border-gray-400 p-4 left-0 top-0 ">
				<ul className="flex flex-col gap-7">
					<li className="shadow-xl p-2 rounded-2xl bg-slate-100 font-standard text-slate-800 text-2xl font-bold cursor-pointer hover:text-slate-900 hover:scale-110 transition ease-in-out hover:underline hover:underline-offset-8">
						من نحن{" "}
					</li>
					<li className="shadow-xl p-2 rounded-2xl bg-slate-100 font-standard text-slate-800 text-2xl font-bold cursor-pointer hover:text-slate-900 hover:scale-110 transition ease-in-out hover:underline hover:underline-offset-8">
						القطاعات
					</li>
					<li className="shadow-xl p-2 rounded-2xl bg-slate-100 font-standard text-slate-800 text-2xl font-bold cursor-pointer hover:text-slate-900 hover:scale-110 transition ease-in-out hover:underline hover:underline-offset-8">
						تواصل معنا
					</li>
				</ul>
			</div> */}
    </div>
  );
};

export default Header;
