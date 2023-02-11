import * as React from "react"
import { theme } from 'antd';
const { useToken } = theme;

const Img4Svg = (props) =>{
  const { token } = useToken();

return  (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    {...props}
    viewBox="-9.5 -20.5 42 50"
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
    <g           opacity={props.activeBut === 4 && props.endPointMark === 'meetings' ? 1 : 0.5}
          fill={props.activeBut === 4 && props.endPointMark === 'meetings' ? "url(#a)" : 'rgba(165,162,153,0.45)'}>
      <path
        data-name="Path 944"
        d="M0 23.875a4.426 4.426 0 0 0 4.421 4.421h22.992a4.426 4.426 0 0 0 4.421-4.421V10.611H0Z"
      />
      <path
        data-name="Path 945"
        d="M27.413 1.769H24.76v2.653a.884.884 0 1 1-1.769 0V.884a.884.884 0 1 0-1.769 0v.884H12.38v2.653a.884.884 0 1 1-1.769 0V.884a.884.884 0 1 0-1.769 0v.884H4.421A4.426 4.426 0 0 0 0 6.19v2.653h31.834V6.19a4.426 4.426 0 0 0-4.421-4.421Z"
      />
    </g>
  </svg>
)
}

export default Img4Svg;
