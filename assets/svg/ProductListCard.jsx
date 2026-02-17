import * as React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={245}
    height={375}
    viewBox="20 59.99989318847656 165 234.86424255371094"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_dd_1_74)">
      <Path
        d="M20 95.1543C20 85.0394 27.552 76.5167 37.5934 75.2996L162.593 60.1481C174.506 58.7041 185 68.0027 185 80.0028V259.71C185 269.825 177.448 278.348 167.407 279.565L42.4067 294.716C30.4938 296.16 20 286.862 20 274.861V95.1543Z"
        fill="url(#paint0_linear_1_74)"
      />
      <Path
        d="M162.714 61.1411C174.031 59.7694 184 68.6026 184 80.0024V259.71C184 269.319 176.825 277.416 167.286 278.572L42.2861 293.723C30.9691 295.095 21.0002 286.262 21 274.862V95.1538C21.0002 85.5448 28.1747 77.4487 37.7139 76.2925L162.714 61.1411Z"
        stroke="url(#paint1_linear_1_74)"
        strokeOpacity={0.2}
        strokeWidth={2}
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1_74"
        x1={79.5}
        y1={121.167}
        x2={115.716}
        y2={262.152}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#353F54" />
        <Stop offset={1} stopColor="#222834" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_74"
        x1={38.5}
        y1={66.3948}
        x2={168.663}
        y2={154.032}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={0.844522} />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
