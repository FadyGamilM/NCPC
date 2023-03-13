import React from "react";
import { GrUserManager } from "react-icons/gr";

const Management = () => {
  return (
    <div className="border-2 p-1">
      <div className="flex items-center gap-2 justify-end">
        <h1 className="font-standard font-bold text-xl">
          رئيس مجلس إدارة الشركة
        </h1>
        <GrUserManager className="text-2xl" />
      </div>
    </div>
  );
};

export default Management;
