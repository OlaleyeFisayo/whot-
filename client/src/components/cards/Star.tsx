import { CardsProps } from "./types";

export default function Star({
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
        <polygon
          className={`${str1}`}
          points="93.6,56.9 114.5,99.2 161.2,106 127.4,138.9 135.4,185.4 93.6,163.5 51.9,185.4 59.8,138.9 26.1,106 
		72.8,99.2 	"
        />
        <polygon
          className={`${str1}`}
          points="21,37.8 24.1,44 31,45.1 26,50 27.2,56.9 21,53.6 14.8,56.9 16,50 10.9,45.1 17.9,44 	"
        />
        <polygon
          className={`${str1}`}
          points="155.1,192.3 158.2,198.6 165.1,199.6 160.1,204.5 161.3,211.4 155.1,208.2 148.9,211.4 150,204.5 
		145,199.6 152,198.6 	"
        />
      </g>
    </svg>
  );
}
