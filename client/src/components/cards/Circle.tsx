import { CardsProps } from "./types";

export default function Circle({
  str0,
  str1,
  str2,
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
        <circle className={`${str1}`} cx="97.8" cy="127.8" r="57.2" />
        <circle className={`${str1}`} cx="23.6" cy="54.5" r="9.3" />
        <rect
          x="14.4"
          y="18"
          className={`${str2}`}
          width="27.8"
          height="27.3"
        />
        <rect
          x="137.4"
          y="209.4"
          className={`${str2}`}
          width="27.8"
          height="27.3"
        />
        <rect
          x="137.4"
          y="209.4"
          className={`${str2}`}
          width="27.8"
          height="27.3"
        />
        <text
          transform="matrix(1 0 0 1 15.942 31.6153)"
          className={`${str3} ${str4} ${str5}`}
        >
         {value}
        </text>
        <circle className={`${str1}`} cx="155.1" cy="198.2" r="9.3" />
        <text
          transform="matrix(1 0 0 1 147.3851 236.655)"
          className={`${str3} ${str4} ${str5}`}
        >
         {value}
        </text>
      </g>
    </svg>
  );
}
