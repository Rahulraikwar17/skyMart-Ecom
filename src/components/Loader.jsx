import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-14 h-14 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
