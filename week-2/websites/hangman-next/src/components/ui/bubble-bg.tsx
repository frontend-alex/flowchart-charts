import React from "react";

const Bubbles: React.FC = () => {
  return (
    <div className="abs overflow-hidden">
      <div className="abs">
        <div className="bg-shape-1 bg-[#FF31B9] opacity-50 blur-[90px]"></div>
        <div className="bg-shape-2 bg-[#FFF44F] opacity-50 blur-[90px]"></div>
        <div className="bg-shape-3 bg-[#FF6347] opacity-50 blur-[90px]"></div>
        <div className="bg-shape-4 bg-[#1E90FF] opacity-50 blur-[90px]"></div>
      </div>
    </div>
  );
};

export default Bubbles;
