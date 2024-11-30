import React from 'react';

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-[#F6F5F8] min-h-[52px] px-4 rounded-[10px] bg-[#71608D] hover:bg-[#4A356A] transition-all ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
