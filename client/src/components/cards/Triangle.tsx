import { CardsProps } from "./types";

export default function Triangle({
  str0,
  str3,
  str4,
  str5,
  value,
}: CardsProps) {
  return (
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 200 300">
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
        <g transform="translate(40, 75) scale(2)">
          <polygon
            stroke="#791026"
            points="25, 0, 0, 48, 50, 48"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="2"
            fill="#791026"
          />
        </g>
        <g transform="translate(13, 42) scale(0.4)">
          <polygon
            stroke="#791026"
            points="25, 0, 0, 48, 50, 48"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="5"
            fill="#791026"
          />
        </g>
        <g transform="translate(166.5, 210) scale(0.4) rotate(180)">
          <polygon
            stroke="#791026"
            points="25, 0, 0, 48, 50, 48"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="5"
            fill="#791026"
          />
        </g>
      </g>
    </svg>
  );
}
