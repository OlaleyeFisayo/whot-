import Circle from "./Circle";
import Cross from "./Cross";
import Square from "./Square";
import Star from "./Star";
import Triangle from "./Triangle";
import { CardPrototype } from "./types";

export default function Card({ shape, value, className }: CardPrototype) {
  const str0 = "fill-[#F4F4F2] strole=[#000000]";
  const str1 = "fill-[#7D1228]";
  const str2 = "fill-none";
  const str3 = "fill-[#791026]";
  const str4 = "font-[MyriadPro-Regular]";
  const str5 = "text-[26.9039px]";

  if (shape === "Cross") {
    return (
      <div className={`w-[200px] h-[350px] ${className}`}>
        <Cross
          str0={str0}
          str1={str1}
          str3={str3}
          str4={str4}
          str5={str5}
          value={value}
        />
      </div>
    );
  } else if (shape === "Triangle") {
    return (
      <div className={`w-[200px] h-[350px] ${className}`}>
        <Triangle
          str0={str0}
          str3={str3}
          str4={str4}
          str5={str5}
          value={value}
        />
      </div>
    );
  } else if (shape === "Circle") {
    return (
      <div className={`w-[200px] h-[350px] ${className}`}>
        <Circle
          str0={str0}
          str1={str1}
          str2={str2}
          str3={str3}
          str4={str4}
          str5={str5}
          value={value}
        />
      </div>
    );
  } else if (shape === "Square") {
    return (
      <div className={`w-[200px] h-[350px] ${className}`}>
        <Square
          str0={str0}
          str1={str1}
          str3={str3}
          str4={str4}
          str5={str5}
          value={value}
        />
      </div>
    );
  } else if (shape === "Star") {
    return (
      <div className={`w-[200px] h-[350px] ${className}`}>
        <Star
          str0={str0}
          str1={str1}
          str3={str3}
          str4={str4}
          str5={str5}
          value={value}
        />
      </div>
    );
  }
}
