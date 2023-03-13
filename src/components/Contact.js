import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn, MdEmail } from "react-icons/md";

const Contact = () => {
	return (
		<div id="contact" className="bg-darkBlue w-full p-2 mb-1">
			<div className="text-end">
				<p className="font-standard font-bold text-3xl text-slate-50 px-1">
					: يمكنك الاتصال وتقديم الشكاوى والمقترحات عن طريق
				</p>
				<div className="flex items-center gap-2 justify-end px-8 py-2">
					<AiFillPhone className="text-slate-300" />
					<p className="font-standard font-bold text-lg text-slate-300">
						02-21816946
					</p>
				</div>
				<div className="flex items-center gap-2 justify-end px-8 py-2">
					<MdLocationOn className="text-slate-300" />
					<p className="font-standard font-bold text-lg text-slate-300">
						جوزيف تيتو - الهايكستب - القاهرة
					</p>
				</div>
				<div className="flex items-center gap-2 justify-end px-8 py-2">
					<MdEmail className="text-slate-300" />
					<p className="font-standard font-bold text-lg text-slate-300">
						nspo@nspo.com.eg
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
