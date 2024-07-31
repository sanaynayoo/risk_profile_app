import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const AnswerArrow = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 360.149 360.149"
    {...props}
  >
    <Path fill={props.color? props.color:'#000000'} d="M27.075 360.149c-.991-5.068-23.28-125.044 36.026-201.698 27.129-35.074 66.968-55.187 118.496-59.835V0l156.392 156.386L181.603 312.79V210.132a147.985 147.985 0 0 0-19.831-1.327c-45.096 0-120.72 19.491-120.72 150.006l-13.977 1.338z" />
  </Svg>
)
export default AnswerArrow
