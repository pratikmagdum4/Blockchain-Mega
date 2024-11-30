import React from 'react';
import { loader } from '../assets';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <img src={loader} alt="loader" className="w-[80px] h-[80px] object-contain" />
      <p className="mt-[20px] font-epilogue font-bold text-[18px] text-[#e0e0e0] text-center">
        Transaction is in progress <br /> Please wait...
      </p>
    </div>
  );
};

export default Loader;
