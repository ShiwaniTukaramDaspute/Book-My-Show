import React from "react";

const Cast = (props) => {
  return (
    <>

    <div className="flex flex-col items-center items-start gap-2 px-3">
      <div className="h-auto">
      <img src={props.src} alt={props.title} className="w-32 h-32 rounded-full relative md:hidden"/>
      </div>
      <h3
      className={`text-lg ${
      props.isDark ? "text-white" : "text-black"
      }`}
      >{props.title}</h3>
      <p
      className={`text-sm ${
      props.isDark ? "text-white" : "text-gray-700"
      }`}
      >{props.subtitle}</p>
    </div>

  
    </>
  )
};

export default Cast;
