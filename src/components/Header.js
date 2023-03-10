import React from "react";
// import {} from "react"

const Header = () => {
	return (
		<div className="border-b-4 border-slate-600 mb-8 pb-2 grid grid-cols-2 text-center">
			{/* Logo */}
			<div>
				<img
					className="w-28 h-28 shadow-xl rounded-lg hover:cursor-pointer"
					src="https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/308743387_547362540525323_2902925620335403646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8FaTSZqsx5QAX9jNLHJ&_nc_ht=scontent.fcai20-2.fna&oh=00_AfA-6l1IwpyS0lSPUpk-lgBTu58-JrBNM_OWdDofC-62AA&oe=640FD6AB"
					alt="logo"
				/>
			</div>
			{/* Menu */}
			<div className=" flex items-center text-center justify-center">
				<ul className="flex gap-16">
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
			</div>
		</div>
	);
};

export default Header;
