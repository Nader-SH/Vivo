import * as React from "react"
import { theme } from 'antd';
const { useToken } = theme;

const Img2Svg = (props) => {
  const { token } = useToken();

return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    {...props}
    viewBox="-9.5 -20.5 45 50"
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
    <g data-name="012-metaverse" 
    opacity={props.activeBut === 2 && props.endPointMark === 'metaverse' ? 1 : 0.5}
      fill={props.activeBut === 2 && props.endPointMark === 'metaverse' ? "url(#a)" : 'rgba(165,162,153,0.45)'}>
      <path
        data-name="Path 1324"
        d="M20.277 23.214a17.557 17.557 0 0 0-4.109-.706v6.118a16.871 16.871 0 0 0 4.109-5.412Z"
      />
      <path
        data-name="Path 1325"
        d="M16.168 1.696V7.93a17.706 17.706 0 0 0 4.108-.7 15.9 15.9 0 0 0-1.9-3.225 14.206 14.206 0 0 0-2.208-2.309Z"
      />
      <path
        data-name="Path 1326"
        d="M23.032 24.286a17.69 17.69 0 0 0-1.06-.475 18.8 18.8 0 0 1-5.142 6.606 15.98 15.98 0 0 0 9.071-4.334 14.744 14.744 0 0 0-2.869-1.797Z"
      />
      <path
        data-name="Path 1327"
        d="M27.167 5.682a17.225 17.225 0 0 1-4.558 2.635 22.306 22.306 0 0 1 1.043 6.036h6.854a15.207 15.207 0 0 0-3.339-8.671Z"
      />
      <path
        data-name="Path 1328"
        d="M25.966 4.354a15.213 15.213 0 0 0-8.95-4.281 15.783 15.783 0 0 1 2.724 2.76 17.692 17.692 0 0 1 2.233 3.804c.4-.163.768-.328 1.1-.487a15.115 15.115 0 0 0 2.893-1.796Z"
      />
      <path
        data-name="Path 1329"
        d="M5.321 24.559a4.117 4.117 0 0 1 4.113-4.112 1.356 1.356 0 1 0 0-2.711H.211a15.325 15.325 0 0 0 5.11 8.964v-2.141Z"
      />
      <path
        data-name="Path 1330"
        d="M16.169 16.143v4.573a19.266 19.266 0 0 1 4.78.824 18.547 18.547 0 0 0 .919-5.4Z"
      />
      <path
        data-name="Path 1331"
        d="M4.435 4.544h2.918a4.215 4.215 0 1 1 0 8.43H.176A14.735 14.735 0 0 0 0 15.248c0 .235.006.469.017.7h9.417a3.145 3.145 0 1 1 0 6.29A2.326 2.326 0 0 0 7.11 24.56v3.487a15.113 15.113 0 0 0 7.135 2.428l.132.008V.001a15.208 15.208 0 0 0-9.942 4.543Z"
      />
      <path
        data-name="Path 1332"
        d="M23.657 16.143a20.682 20.682 0 0 1-1.023 6 16.831 16.831 0 0 1 4.477 2.622l.02.02a14.141 14.141 0 0 0 1.947-2.966 12.332 12.332 0 0 0 .729-1.9 15.236 15.236 0 0 0 .7-3.771h-6.85Z"
      />
      <path
        data-name="Path 1333"
        d="M16.171 9.722v4.631h5.692a20.509 20.509 0 0 0-.94-5.442 19.417 19.417 0 0 1-4.752.811Z"
      />
      <path
        data-name="Path 1334"
        d="M7.353 11.185a2.426 2.426 0 1 0 0-4.852H2.919a15.347 15.347 0 0 0-2.357 4.852Z"
      />
    </g>
  </svg>
)
}

export default Img2Svg;
