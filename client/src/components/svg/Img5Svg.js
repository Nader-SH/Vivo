import * as React from "react"
import { theme } from 'antd';
const { useToken } = theme;

const Img5Svg = (props) => {
  const { token } = useToken();

  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    {...props}
    viewBox="-9.5 -20.5 50 45"
  >
    <defs>
      <linearGradient
        id="a"
        x1={1.594}
        y1={0.5}
        x2={-0.015}
        y2={0.5}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor={token.colorBgBase} />
        <stop offset={1} stopColor={token.colorPrimary} />
      </linearGradient>
    </defs>
    <path
      data-name="Path 1323"
      d="M18.502 0H9.795a9.81 9.81 0 0 0-9.8 9.8v8.707a9.81 9.81 0 0 0 9.8 9.8h8.707a9.81 9.81 0 0 0 9.8-9.8V9.795A9.81 9.81 0 0 0 18.502 0ZM14.15 10.884a5.444 5.444 0 0 1-5.442-5.442 1.089 1.089 0 1 1 2.177 0 3.265 3.265 0 1 0 6.53 0 1.089 1.089 0 0 1 2.177 0 5.444 5.444 0 0 1-5.442 5.442Z"
      opacity={props.activeBut === 5 && props.endPointMark === 'marketplace' ? 1 : 0.5}
      fill={props.activeBut === 5 && props.endPointMark === 'marketplace' ? "url(#a)" : 'rgba(165,162,153,0.45)'}
    />
  </svg>
  )
}

export default Img5Svg;



// opacity={props.props === 5 ? 1 : 0.5}
// fill={props.props === 5 ? "url(#a)" : 'rgba(165,162,153,0.45)'}