import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const List = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#00A63B"
      d="M3 11.5a8.38 8.38 0 0 0 .9 3.8 8.5 8.5 0 0 0 7.6 4.7 8.379 8.379 0 0 0 3.8-.9L21 21l-1.9-5.7a8.379 8.379 0 0 0 .9-3.8 8.5 8.5 0 0 0-4.7-7.6 8.38 8.38 0 0 0-3.8-.9H11a8.48 8.48 0 0 0-8 8v.5Z"
      opacity={0.15}
    />
    <Path
      stroke="#00A63B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 21-5.7-1.9s-1.215.9-3.8.9a8.5 8.5 0 1 1 8.5-8.5c0 2.5-.9 3.8-.9 3.8L21 21Z"
    />
  </Svg>
)
export default List
