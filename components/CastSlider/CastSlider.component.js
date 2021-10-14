import React from "react";
import Cast from "../Cast/Cast.component";

import settings from "../../config/CastCarousal.config";

import Slider from "react-slick";

const CastSlider = (props) => {
  return (
    <>
    <div className="flex flex-col items-start py-1">
    <h3 className={
      `text-2xl ${
        props.isDark ? "text-white" : "text-black font-bold py-2"
      }`
    }>{props.title}</h3>
    <p className={
      `text-sm ${
        props.isDark ? "text-white" : "text-gray-800"
      }`
    }>{props.subtitle}</p>
    </div>
    <Slider {...settings}>
    {props.images.map((image)=> (
      <Cast {...image} isDark={props.isDark} />
    ))}
    </Slider>
    </>
  )
}

export default CastSlider;
