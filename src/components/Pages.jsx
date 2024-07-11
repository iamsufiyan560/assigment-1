import React from "react";

const Page = ({ name, isSelected, onToggle, isLast, onHover }) => {
  return (
    <div
      className={`flex items-center justify-between w-[370px] h-[20px]
        
        px-[15px] pl-[22px] pb-8
        gap-[10px] font-montserrat text-[14px] font-normal leading-[18.2px] text-left text-[#1F2128]  cursor-pointer  ${
          !isLast ? "mb-4" : ""
        } hover-highlight`}
      onMouseEnter={onHover}
      onClick={onToggle}
    >
      <div>{name}</div>

      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          className="form-checkbox h-5 w-5 text-blue-600 rounded-xl border-[#CDCDCD] border"
        />
        <span className="checkbox-custom"></span>
      </label>
    </div>
  );
};

export default Page;
