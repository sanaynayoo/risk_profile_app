import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"
const User = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#ffffff"
      d="M19.651 19.405c.553-.115.883-.693.608-1.187-.606-1.087-1.56-2.043-2.78-2.771C15.907 14.508 13.98 14 12 14c-1.981 0-3.907.508-5.479 1.447-1.22.728-2.174 1.684-2.78 2.771-.275.494.055 1.072.607 1.187a37.503 37.503 0 0 0 15.303 0Z"
    />
    <Circle cx={12} cy={8} r={5} fill="#fff" />
  </Svg>
)
export default User
