import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 15c0 8.284-6.716 15-15 15S0 23.284 0 15 6.716 0 15 0s15 6.716 15 15M4.968 21.587l4.805-8.584h10.114l4.862 8.995A11.95 11.95 0 0 0 27 15c0-6.627-5.373-12-12-12S3 8.373 3 15c0 2.433.724 4.696 1.968 6.587"
      fill="#fff"
      fillOpacity={0.6}
    />
    <Path
      d="M14.618 13.003h.85l.127 1.19H14.49zm-.17 2.634h1.19l.127 1.275h-1.487zm-.34 3.485h1.87l.212 2.294h-2.422zm-.34 5.268h2.55l.254 2.805H13.47z"
      fill="#000"
    />
  </Svg>
);
export default SVGComponent;
