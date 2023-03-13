import React from "react";
import Outlet from "./Outlet";

const Outlets = () => {
  return (
    <div>
      <h1 className="font-standard font-bold text-5xl text-end mb-6">
        :منـــافذ بيع منتجات الشركة
      </h1>
      {/* //! All Outlets */}
      <div className="grid grid-cols-2 twoCols:grid-cols-4 gap-8 mb-0 container mx-auto border-b-4 border-slate-600 pb-8">
        <Outlet manfzData={"منفذ أبو حــماد"} movable={true} />
        <Outlet manfzData={"منفذ الأدرنية"} movable={false} />
        <Outlet manfzData={"منفذ منيــا القمح"} movable={false} />
        <Outlet manfzData={"منفذ البوابة الرئيسية"} movable={true} />
        <Outlet manfzData={"منفذ بـاب الشعرية"} movable={false} />
        <Outlet manfzData={"منفذ 6 أكتوبر"} movable={false} />
        <Outlet manfzData={"منفذ  ألف مسكن"} movable={true} />
        <Outlet manfzData={"منفذ الشروق"} movable={false} />
        <Outlet manfzData={"منفذ نادي الرواد"} movable={true} />
        <Outlet manfzData={"منفذ المستـتقبل"} movable={false} />
        <Outlet manfzData={"منفذ بلبيـس"} movable={false} />
        <Outlet manfzData={"منفذ العبور"} movable={false} />
      </div>
    </div>
  );
};

export default Outlets;
