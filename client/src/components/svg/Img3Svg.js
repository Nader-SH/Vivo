import * as React from "react"
import { theme } from 'antd';
const { useToken } = theme;

const Img3Svg = (props) => {
  const { token } = useToken();

return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={46}
    {...props}
    viewBox="-9.5 -20.5 60 50"
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
    <g 
          opacity={props.activeBut === 3 && props.endPointMark === 'pi' ? 1 : 0.5}
          fill={props.activeBut === 3 && props.endPointMark === 'pi' ? "url(#a)" : 'rgba(165,162,153,0.45)'}
    >
      <path
        data-name="pi"
        d="M19.561 44.482c-1 0-5.117.1-5.117-5.885v-13H6.112v18.568H0V20.752h20.559v15.806c0 2.773 1.143 2.672 1.721 2.672a12.711 12.711 0 0 0 3.294-.453l-1.3 4.8a11.241 11.241 0 0 1-4.713.905Z"
      />
      <text
        data-name={2}
        transform="translate(21.573 22)"
        fontSize={20}
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x={0} y={0}>
          {"2"}
        </tspan>
      </text>
    </g>
  </svg>
)
}

export default Img3Svg;
