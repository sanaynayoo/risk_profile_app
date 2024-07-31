import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Checked = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#26EA6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 12 4.95 4.95L22.557 6.343M2.05 12.05 7 17M17.606 6.394l-5.303 5.303"
    />
  </Svg>
)
export default Checked
