import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={390}
    height={695}
    viewBox="0 0 390 695"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M242.5 167.5L322 0L393.5 59.5V720.5L-20 705L242.5 167.5Z"
      fill="url(#paint0_linear_1_43)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_43"
        x1={168.5}
        y1={0.500004}
        x2={372.499}
        y2={720.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#37B6E9" />
        <Stop offset={1} stopColor="#4B4CED" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
