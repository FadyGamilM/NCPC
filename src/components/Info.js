import React from "react";

const Info = () => {
	return (
		<div className="w-full twoCols:grid-cols-2 sm:grid-cols-1 sm:grid sm:gap-y-8 twoCols:gap-x-8 text-center">
			<div className="mx-auto">
				<img
					className="rounded-2xl shadow-2xl"
					src="https://gate.ahram.org.eg/Media/News/2017/12/23/19_2017-636496455232845281-284.jpg"
					alt="who we are"
				/>
			</div>

			<div className="flex flex-col items-end gap-y-14 justify-center">
				<h1 className="bg-slate-600 p-3 rounded-full text-slate-50 text-4xl font-bold font-standard">
					من نحن ؟
				</h1>
				<p className="text-slate-700 font-bold font-standard text-xl">
					تأسست الشركة الوطنية للزراعات المحمية فى ديسمبر عام 2016 بهدف
					المساهمــــة في سد الفجوة الغذائيـــة المحلية بإنتاج وتوفير أصناف
					الخضـــر بجودة عالية وأسعار مناسبة و زيادة حجم الشراكة المصرية في
					السوق الخارجي من خلال مميزات تسويقية جديدة و كذلك إتاحة فرص عمل لشباب
					الخريجين والعمالة الزراعية مع التدريب ورفع الكفاءة لإيجاد كوادر عالية
					الكفاءة للتعامل مع التكنولوجيا الحديثة فى مجال الزراعات المحمية
				</p>
			</div>
		</div>
	);
};

export default Info;
