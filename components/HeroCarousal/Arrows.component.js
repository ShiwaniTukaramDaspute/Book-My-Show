import React from "react";
import { BiChevronRight, BiChevronLeft} from "react-icons/bi";
export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style,
     backgroundColor: "rgba(0, 0, 0, 0.4)",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     position: "absolute",
     cursor: "pointer",
     width: "40px",
     height: "46px",
     borderRadius: "6px 0px 0px 6px",
     content: ">"
 }}
onClick={props.onClick}
     />
    </>
  );
};


export const PrevArrow = (props) => {
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style,
     backgroundColor: "rgba(0, 0, 0, 0.4)",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     position: "absolute",
     width: "40px",
     height: "46px",
     borderRadius: "0px 6px 6px 0px",
 }}
   onClick={props.onClick}
    />
    </>
  );
};
