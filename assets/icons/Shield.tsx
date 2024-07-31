import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Shield = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#ffffff"
      d="M11.25 2.073c-.606.113-1.318.357-2.412.732L8.265 3C5.258 4.03 3.755 4.544 3.378 5.082 3.008 5.608 3 7.15 3 10.21l8.25-2.75V2.073ZM11.25 9.04 3 11.79v.201c0 5.638 4.239 8.374 6.899 9.536.51.223.84.367 1.351.432V9.04ZM12.75 21.96V9.04L21 11.79v.201c0 5.638-4.239 8.374-6.899 9.536-.51.223-.84.367-1.351.432ZM12.75 7.46V2.072c.606.113 1.318.357 2.412.732l.573.196c3.007 1.029 4.51 1.543 4.887 2.081.37.526.378 2.068.378 5.127l-8.25-2.75Z"
    />
  </Svg>
)
export default Shield
