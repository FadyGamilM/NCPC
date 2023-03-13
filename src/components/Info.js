import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { GiNightVision, GiAchievement } from "react-icons/gi";
const Info = () => {
  return (
    <div className="border-b-4 border-slate-600 pb-4 container mx-auto">
      <div
        id="whoWeAre"
        className="w-full twoCols:grid-cols-2 sm:grid-cols-1 sm:grid sm:gap-y-8 twoCols:gap-x-8 text-center "
      >
        <div className="mx-auto">
          <img
            className="rounded-2xl shadow-2xl"
            src="https://gate.ahram.org.eg/Media/News/2017/12/23/19_2017-636496455232845281-284.jpg"
            alt="who we are"
          />
        </div>

        <div className="flex flex-col items-end gap-y-14 justify-center">
          <h1 className="bg-slate-600 hover:bg-slate-800 hover:cursor-pointer transition ease-in-out p-3 rounded-full text-slate-50 text-4xl font-bold font-standard">
            من نحن ؟
          </h1>
          <p className="text-slate-700 font-bold font-standard text-xl">
            تأسست الشركة الوطنية للزراعات المحمية فى ديسمبر عام 2016 بهدف
            المساهمــــة في سد الفجوة الغذائيـــة المحلية بإنتاج وتوفير أصناف
            الخضـــر بجودة عالية وأسعار مناسبة و زيادة حجم الشراكة المصرية في
            السوق الخارجي من خلال مميزات تسويقية جديدة و كذلك إتاحة فرص عمل
            لشباب الخريجين والعمالة الزراعية مع التدريب ورفع الكفاءة لإيجاد
            كوادر عالية الكفاءة للتعامل مع التكنولوجيا الحديثة فى مجال الزراعات
            المحمية
          </p>
        </div>
      </div>

      <div className="w-full px-4 grid twoCols:grid-cols-3 gap-8 text-center py-4 pt-10">
        <div className="grid grid-rows-2 items-center justify-center">
          <AiFillMessage className="mx-11 text-2xl text-darkBlue" />
          <p className="text-4xl text-darkBlue font-standard font-extrabold">
            الرسالة
          </p>
        </div>
        <div className="grid grid-rows-2 items-center justify-center">
          <GiNightVision className="mx-11 text-2xl text-darkBlue" />
          <p className="text-4xl text-darkBlue font-standard font-extrabold">
            الرؤية
          </p>
        </div>
        <div className="grid grid-rows-2 items-center justify-center">
          <GiAchievement className="mx-11 text-2xl text-darkBlue" />
          <p className="text-4xl text-darkBlue font-standard font-extrabold">
            الهدف
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
