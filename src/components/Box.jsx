import React from "react";
import Page from "./Pages";
import Line from "./Line";

const Box = ({
  pages,
  onToggleAll,
  onTogglePage,
  isAllSelected,
  onHoverAll,
}) => {
  return (
    <div>
      <div
        className="flex items-center justify-between w-[370px] h-[42px] py-[8px] px-[15px] mt-2 mb-[10px] pl-[22px] gap-0 font-montserrat text-[14px] font-normal leading-[18.2px] text-left  text-[#1F2128] hover-highlight "
        onMouseEnter={onHoverAll}
        onClick={onToggleAll}
      >
        <div className="hover-highlight  cursor-pointer">All pages</div>
        <label
          className="checkbox-container"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={onToggleAll}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-xl border-[#CDCDCD] border"
          />
          <span className="checkbox-custom"></span>
        </label>
      </div>
      <Line />
      {pages.map((page, index) => (
        <Page
          key={index}
          name={`Page ${index + 1}`}
          isSelected={page.isSelected}
          onToggle={() => onTogglePage(index)}
          isLast={index === pages.length - 1}
        />
      ))}

      <button
        className="w-[340px] h-[40px] mr-[15px]  ml-[15px] bg-[#FFCE22] text-color[
#1F2128] hover:bg-[#FFD84D] rounded-md "
      >
        Done
      </button>
    </div>
  );
};

export default Box;
