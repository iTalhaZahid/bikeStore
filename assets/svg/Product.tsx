import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Text,
  Image,
} from "react-native-svg";

type Props = {
  category?: string;
  price?: string;
  liked?: boolean;
  // for remote image: { uri: "https://..." }
  // for local images you may need uri/base64 depending on setup
  imageHref?: any;
} & React.ComponentProps<typeof Svg>;

const ProductCardSvg = ({
  category = "Road Bike",
  price = "$1,999",
  liked = false,
  imageHref,
  ...props
}: Props) => (
  <Svg width={"100%"} height={300} viewBox="0 0 245 420" fill="none" {...props}>
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

    {/* Heart (top-left) */}
    <G transform="translate(130, -10)">
      <Path
        d="M55 105c-4.5-4.6-12.2-3.8-15.3 1.5-3 5.2-1.6 11.4 2.4 15.1l12.9 11.8 12.9-11.8c4-3.7 5.4-9.9 2.4-15.1-3.1-5.3-10.8-6.1-15.3-1.5l-0.0 0z"
        fill={liked ? "#FF4D6D" : "none"}
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </G>


    {/* Product image (center) */}
    {imageHref ? (
      <Image
        href={imageHref}
        x={25}          // adjust to move left/right
        y={130}         // adjust to move up/down
        width={200}
        height={120}
        preserveAspectRatio="xMidYMid meet"
      />
    ) : null}

    {/* Bottom-left texts */}
    <Text
      x={40}
      y={285}
      fill="#FFFFFF"
      fontSize={16}
      fontWeight="700"
    >
      {category}
    </Text>

    <Text
      x={40}
      y={310}
      fill="#34C8E8"
      fontSize={16}
      fontWeight="700"
    >
      {price}
    </Text>

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
        <Stop offset={0.844522} stopColor="transparent" />
        <Stop offset={1} stopColor="transparent" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default ProductCardSvg;
