import { CardsProps } from "./types";

export default function Cross({
  str0,
  str1,
  str3,
  str4,
  str5,
  value,
  className,
}: CardsProps) {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 186.3 255.5"
      className={`w-full h-full ${className}`}
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
        <g>
          <rect
            x="17.9"
            y="91.9"
            className={`${str1}`}
            width="153.3"
            height="52.3"
          />
          <rect
            x="68.4"
            y="45.3"
            className={`${str1}`}
            width="52.3"
            height="153.3"
          />
        </g>
        <g>
          <rect
            x="10.3"
            y="49.4"
            className={`${str1}`}
            width="21.3"
            height="7.3"
          />
          <rect
            x="17.3"
            y="42.9"
            className={`${str1}`}
            width="7.3"
            height="21.3"
          />
        </g>
        <g>
          <rect
            x="144.4"
            y="200"
            className={`${str1}`}
            width="21.3"
            height="7.3"
          />
          <rect
            x="151.4"
            y="193.5"
            className={`${str1}`}
            width="7.3"
            height="21.3"
          />
        </g>
      </g>
    </svg>
  );
}
