import * as React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Image as SvgImage,
  Text as SvgText,
} from "react-native-svg";

type Props = React.ComponentProps<typeof Svg> & {
  // content
  productName?: string;
  category?: string;
  price?: string;

  // image can be a remote url string OR require("...") depending on RN setup
  // For remote: "https://..."
  // For local: require("./path.png") (may need { uri: ... } depending on your bundler)
  imageHref?: any;

  // like
  liked?: boolean;
  onToggleLike?: () => void;
};

const SVGComponent = ({
  productName = "Product name",
  category = "Category",
  price = "$99",
  imageHref,
  liked = false,
  onToggleLike,
  ...props
}: Props) => {
  // Your tight bbox-derived viewBox
  const vbX = 20;
  const vbY = 59.99989318847656;
  const vbW = 165;
  const vbH = 234.86424255371094;

  // Convenience values inside the viewBox space
  const right = vbX + vbW;
  const bottom = vbY + vbH;

  // Layout numbers (tweak freely)
  const pad = 10;

  // Heart box (top-right)
  const heartSize = 18;
  const heartX = right - pad - heartSize;
  const heartY = vbY + pad;

  // Image (center)
  const imgW = 92;
  const imgH = 92;
  const imgX = vbX + (vbW - imgW) / 2;
  const imgY = vbY + 52; // moves image downward a bit

  // Text (bottom-left)
  const nameX = vbX + pad;
  const nameY = bottom - 56;
  const metaY = bottom - 38;

  return (
    <Svg
      width={245}
      height={375}
      viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
      fill="none"
      {...props}
    >
      {/* Card */}
      <G>
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

      {/* Heart (top-right) */}
      <G
        // react-native-svg supports press handlers on elements
        onPress={onToggleLike}
      >
        {/* optional touch target background */}
        <Path
          d={`
            M ${heartX - 6} ${heartY - 6}
            h ${heartSize + 12}
            v ${heartSize + 12}
            h -${heartSize + 12}
            z
          `}
          fill="transparent"
        />

        {/* heart icon */}
        <Path
          transform={`translate(${heartX}, ${heartY})`}
          d="M9 16.2S2.2 12 2.2 6.9C2.2 4.2 4.3 2 7 2c1.3 0 2.5.6 3.3 1.5C11.1 2.6 12.3 2 13.6 2c2.7 0 4.8 2.2 4.8 4.9 0 5.1-6.8 9.3-9.4 9.3Z"
          fill={liked ? "#FF4D6D" : "none"}
          stroke={liked ? "#FF4D6D" : "rgba(255,255,255,0.75)"}
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
      </G>

      {/* Product image (center) */}
      {imageHref ? (
        <SvgImage
          x={imgX-22}
          y={imgY-10}
          width={imgW+40}
          height={imgH+16}
          preserveAspectRatio="xMidYMid meet"
          href={imageHref}
          opacity={1}
        />
      ) : null}

      {/* Product name (bottom-left) */}
      <SvgText
        x={nameX}
        y={nameY}
        fill="white"
        fontSize={12}
        fontWeight="700"
      >
        {productName}
      </SvgText>

      {/* Category + price (bottom-left, smaller) */}
      <SvgText
        x={nameX}
        y={metaY-2}
        fill="rgba(255,255,255,0.75)"
        fontSize={10}
        fontWeight="500"
      >
        {category} 
      </SvgText>
      <SvgText
        x={nameX}
        y={metaY+14}
        fill="rgba(255,255,255,0.75)"
        fontSize={10}
        fontWeight="500"
      >
         {price}
      </SvgText>

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
};

export default SVGComponent;
