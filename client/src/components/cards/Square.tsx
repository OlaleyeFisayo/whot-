import { CardsProps } from "./types";

export default function Square({
  str0,
  str1,
  str3,
  str4,
  str5,
  value,
}: CardsProps) {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="4 4 179 247"
      className="w-full h-full border-[1px] border-solid border-[#791026] rounded-2xl"
    >
      <g id="ace">
        <g>
          <path
            className={`${str0}`}
            d="M182.9,237.7c0,7.8-6.3,14.2-14.2,14.2H18.5c-7.8,0-14.2-6.3-14.2-14.2V16.6c0-7.8,6.3-14.2,14.2-14.2h150.2
			c7.8,0,14.2,6.3,14.2,14.2V237.7z"
          />
        </g>

        <text
          transform="matrix(1 0 0 1 13.2988 34.2585)"
          className={`${str3} ${str4} ${str5}`}
        >
          {value}
        </text>
        <text
          transform="matrix(1 0 0 1 147.3851 236.655)"
          className={`${str3} ${str4} ${str5}`}
        >
          {value}
        </text>
        <rect
          x="33.1"
          y="67.9"
          className={`${str1}`}
          width="121.1"
          height="121.1"
        />
        <rect
          x="11.9"
          y="45.3"
          className={`${str1}`}
          width="21.2"
          height="18.5"
        />
        <rect
          x="144.5"
          y="195.5"
          className={`${str1}`}
          width="21.2"
          height="18.5"
        />
      </g>
    </svg>
  );
}
