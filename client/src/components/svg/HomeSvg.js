import * as React from "react"
import { theme } from 'antd';
const { useToken } = theme;

const HomeSvg = (props) => {
  const { token } = useToken();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={45}
      {...props}
      viewBox="-9.5 -20.5 42 50"
    >    <defs>
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
        data-name="Home, homepage, menu"
        d="M36.124 16.315 21.729 6.155a.848.848 0 0 0-.977 0L6.358 16.315a.849.849 0 0 0-.358.692v18.628a.846.846 0 0 0 .847.847h9.314a.846.846 0 0 0 .847-.847V25.474h8.467v10.161a.846.846 0 0 0 .847.847h9.314a.846.846 0 0 0 .847-.847V17.007a.849.849 0 0 0-.358-.692Z"
        transform="translate(-5.5 -5.472)"
        stroke="rgba(0,0,0,0)"
        opacity={props.activeBut === 1 && props.endPointMark === '' ? 1 : 0.5}
        fill={props.activeBut === 1 && props.endPointMark === '' ? "url(#a)" : 'rgba(165,162,153,0.45)'} 
        
        />
    </svg>
  )
}

export default HomeSvg;
