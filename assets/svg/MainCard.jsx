import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
  Text,
  Image,
} from "react-native-svg";

const MainCardSvg = ({
  title = "Anything",
  imageHref,
  SvgContent,
  // pass a uri: { uri: "https://..." } OR require(...) in most cases use uri
  ...props
}) => (
  <Svg
    width={"100%"}
    height={400}
    viewBox="0 80 390 390"
    fill="none"
    {...props}
  >
    {/* Card shape + border */}
    <G>
      <Path
        d="M20 100C20 88.9543 28.9543 80 40 80H350C361.046 80 370 88.9543 370 100V262.156C370 272.323 362.372 280.872 352.271 282.026L42.2709 317.455C30.4029 318.811 20 309.529 20 297.584V100Z"
        fill="url(#paint0_linear_1_144)"
        fillOpacity={0.6}
      />
      <Path
        d="M40 81H350C360.493 81 369 89.5066 369 100V262.155C369 271.814 361.753 279.936 352.157 281.032L42.1572 316.461C30.8826 317.749 21 308.932 21 297.584V100L21.0059 99.5098C21.2659 89.2429 29.6705 81 40 81Z"
        stroke="url(#paint1_linear_1_144)"
        strokeOpacity={0.2}
        strokeWidth={2}
      />
    </G>

    {/* Content clipped inside the card */}
    <G clipPath="url(#cardClip)">
      {/* Image (optional) */}
      {imageHref ? (
        <Image
          href={imageHref}
          x={40}
          y={110}
          width={"100%"}
          height={"63%"}
          preserveAspectRatio="xMidYMid slice"
          opacity={1}
        />
      ) : null}
      {SvgContent ? (
        <G
          x={40}
          y={110}
          width="100%"
          height="63%"
        >
          <SvgContent
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </G>
      ) : null}

      {/* Text */}
      <Text
        x={40}
        y={285}
        fill="rgba(255,255,255,0.6)"
        fontSize={22}
        fontWeight="700"
      >
        {title}
      </Text>
    </G>

    <Defs>
      {/* Clip path that matches the card */}
      <ClipPath id="cardClip">
        <Path d="M20 100C20 88.9543 28.9543 80 40 80H350C361.046 80 370 88.9543 370 100V262.156C370 272.323 362.372 280.872 352.271 282.026L42.2709 317.455C30.4029 318.811 20 309.529 20 297.584V100Z" />
      </ClipPath>

      <LinearGradient
        id="paint0_linear_1_144"
        x1={146.212}
        y1={143.734}
        x2={164.149}
        y2={291.851}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#353F54" />
        <Stop offset={1} stopColor="#222834" />
      </LinearGradient>

      <LinearGradient
        id="paint1_linear_1_144"
        x1={59.2424}
        y1={88.9627}
        x2={191.249}
        y2={277.494}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="transparent" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default MainCardSvg;
