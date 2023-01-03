import React from "react";

const DividerText = ({ text = "", textClassName = "" }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className={`px-2 text-sm text-gray-500 ${textClassName}`}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default DividerText;
