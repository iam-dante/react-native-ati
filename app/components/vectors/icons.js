import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

export function ArchiveIcon(props) {
    return (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <Path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
    </Svg>
    )
  }

export function CalendarIcon(props) {
    return (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      />
    </Svg>
    )
  }

export function HeartIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export function FileIcon(props){
    return (
      <Svg
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.391 0a1 1 0 000 2h4.82l1.848 1.712.288.266h7.87v12.848a1 1 0 102 0V3.978a2 2 0 00-2-2h-7.086L9.571.533A2 2 0 008.211 0h-4.82zm4.25 7.795l.583.575h5.602v9.847H2V6.391h4.215L7.64 7.795zm-.315-3.116l1.717 1.69h5.783a1 1 0 011 1v11.848a1 1 0 01-1 1H1a1 1 0 01-1-1V5.391a1 1 0 011-1h5.624a1 1 0 01.702.288z"
          fill="#000"
        />
      </Svg>
    )
}

 export function ShareIcon(props) {
    return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 6a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47c.03-.246.03-.494 0-.74l4.94-2.47C11.456 5.68 12.19 6 13 6z"
        fill="#fff"
      />
    </Svg>
  )
}

export function BugIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 6H6v6h6V6z" fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1a1 1 0 012 0v1h2V1a1 1 0 012 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 010 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 01-2 0v-1H8v1a1 1 0 11-2 0v-1H4a2 2 0 01-2-2v-2H1a1 1 0 010-2h1V8H1a1 1 0 010-2h1V4a2 2 0 012-2h2V1zM4 4h10v10H4V4z"
        fill="#fff"
      />
    </Svg>
  )
}

export function StarIcon(props) {
  return (
    <Svg
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.406 1.366c.345-1.06 1.844-1.06 2.187 0l1.23 3.786a1.15 1.15 0 001.093.793h3.982c1.114 0 1.576 1.426.676 2.082l-3.22 2.339a1.15 1.15 0 00-.419 1.286l1.23 3.786c.346 1.059-.867 1.94-1.77 1.285l-3.22-2.339a1.15 1.15 0 00-1.351 0l-3.22 2.34c-.902.655-2.114-.227-1.77-1.287l1.23-3.785a1.15 1.15 0 00-.418-1.286l-3.22-2.338c-.9-.656-.436-2.082.677-2.082h3.98a1.15 1.15 0 001.094-.793l1.23-3.786v-.001z"
        fill="#FEFEFE"
      />
    </Svg>
  )
}

 export function InstagramIcon(props) {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.006 1.801c2.673 0 2.99.012 4.041.059.977.043 1.505.207 1.857.344.465.18.801.398 1.149.746.352.351.567.684.746 1.148.137.352.301.883.344 1.856.047 1.055.06 1.372.06 4.04 0 2.672-.013 2.989-.06 4.04-.043.977-.207 1.504-.344 1.856-.18.465-.398.8-.746 1.148a3.078 3.078 0 01-1.15.747c-.35.137-.883.3-1.856.343-1.055.047-1.372.06-4.041.06-2.674 0-2.99-.013-4.042-.06-.977-.042-1.504-.206-1.856-.343a3.094 3.094 0 01-1.15-.747 3.076 3.076 0 01-.746-1.148c-.137-.352-.3-.883-.344-1.856-.047-1.055-.058-1.371-.058-4.04 0-2.672.011-2.989.058-4.04.043-.976.207-1.504.344-1.856.18-.464.399-.8.747-1.148a3.078 3.078 0 011.149-.746c.352-.137.883-.301 1.856-.344 1.052-.047 1.368-.059 4.042-.059zm0-1.801C7.289 0 6.949.012 5.882.059 4.82.105 4.088.277 3.455.524c-.66.257-1.22.597-1.774 1.156A4.9 4.9 0 00.524 3.45C.278 4.087.106 4.813.059 5.876.012 6.946 0 7.286 0 10.002c0 2.715.012 3.055.059 4.122.047 1.063.219 1.793.465 2.426.258.66.598 1.22 1.157 1.774a4.892 4.892 0 001.77 1.152c.637.247 1.364.419 2.427.465 1.067.047 1.408.059 4.124.059 2.716 0 3.056-.012 4.123-.059 1.064-.046 1.794-.218 2.428-.464a4.892 4.892 0 001.77-1.153 4.89 4.89 0 001.153-1.77c.247-.637.419-1.363.465-2.426.047-1.067.059-1.407.059-4.122 0-2.716-.012-3.055-.059-4.122-.046-1.063-.218-1.793-.465-2.426a4.685 4.685 0 00-1.145-1.778 4.892 4.892 0 00-1.77-1.153C15.923.281 15.196.11 14.133.063 13.063.012 12.723 0 10.006 0z"
        fill="#fff"
      />
      <Path
        d="M10.006 4.864a5.14 5.14 0 00-5.14 5.138 5.14 5.14 0 0010.28 0 5.14 5.14 0 00-5.14-5.138zm0 8.47a3.334 3.334 0 110-6.667 3.334 3.334 0 010 6.668zM16.55 4.661a1.2 1.2 0 11-2.4-.001 1.2 1.2 0 012.4.001z"
        fill="#fff"
      />
    </Svg>
  )
}

export function TwitterIcon(props) {
  return (
    <Svg
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.292 17.125c7.545 0 11.673-6.253 11.673-11.673 0-.176-.004-.356-.012-.532A8.332 8.332 0 0020 2.796a8.09 8.09 0 01-2.355.645 4.125 4.125 0 001.804-2.27 8.247 8.247 0 01-2.605.996A4.108 4.108 0 009.85 5.91a11.654 11.654 0 01-8.456-4.284A4.108 4.108 0 002.664 7.1a4.108 4.108 0 01-1.86-.512v.051a4.102 4.102 0 003.293 4.023 4.078 4.078 0 01-1.851.07 4.111 4.111 0 003.831 2.852A8.23 8.23 0 010 15.282a11.64 11.64 0 006.292 1.843z"
        fill="#fff"
      />
    </Svg>
  )
}

 export function TelegramIcon(props) {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zm-9.642-2.618a475.83 475.83 0 00-5.832 2.512c-.473.189-.72.373-.743.553-.039.304.343.424.861.587l.22.07c.51.166 1.197.36 1.554.368.324.007.685-.127 1.084-.4 2.724-1.84 4.13-2.769 4.218-2.789.063-.014.149-.032.207.02.059.052.053.15.047.177-.038.16-1.534 1.552-2.308 2.271-.241.225-.413.384-.448.42a8.817 8.817 0 01-.235.233c-.474.457-.83.8.02 1.36.408.27.735.492 1.061.714.356.242.711.484 1.17.785.118.077.23.156.338.234.415.296.787.56 1.247.518.267-.024.543-.275.683-1.025.331-1.77.983-5.608 1.133-7.19a1.764 1.764 0 00-.017-.393.421.421 0 00-.142-.27c-.12-.098-.305-.118-.387-.117-.377.007-.954.207-3.73 1.362z"
        fill="#fff"
      />
    </Svg>
  )
}

export function DribbleIcon(props) {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10c5.51 0 10-4.48 10-10S15.51 0 10 0zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.322 25.322 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM10 1.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0110 1.475zm-3.633.803a53.902 53.902 0 013.167 4.935c-3.992 1.062-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM1.453 10.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.521 8.521 0 01-2.19-5.705zM10 18.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.316 35.316 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.68-.423 5.023.271 5.315.369a8.468 8.468 0 01-3.655 5.715z"
        fill="#fff"
      />
    </Svg>
  )
}

export function AtIcon(props) {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.5 17.794a8.958 8.958 0 01-4.5 1.207M14 10a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V10a9 9 0 10-9 9l4-9z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function InfoIcon(props) {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 14h-1v-4H9l2 4zm-1-8h.01H10zm9 4a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}


export function DropArrow(props) {
  return (
    <Svg
      width={12}
      height={8}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 1L6 6.25 1 1"
        stroke="#304B65"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function OppsiteDropArrow(props) {
    return (
      <Svg
        width={12}
        height={8}
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M1 6.25L6 1l5 5.25"
          stroke="#304B65"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }



  export function GoogleIcon(props) {
    return (
      <Svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Circle cx={15} cy={15} r={15} fill="#fff" />
        <G clipPath="url(#prefix__clip0)">
          <Path
            d="M25.988 15.206c0-.901-.075-1.56-.236-2.241H15.219v4.068h6.182c-.124 1.01-.797 2.533-2.293 3.556l-.021.137 3.33 2.52.23.023c2.12-1.912 3.341-4.726 3.341-8.063"
            fill="#4285F4"
          />
          <Path
            d="M15.22 25.924c3.028 0 5.57-.974 7.428-2.655l-3.54-2.68c-.947.646-2.219 1.097-3.889 1.097a6.739 6.739 0 01-6.382-4.556l-.131.011-3.463 2.619-.045.123c1.844 3.581 5.634 6.041 10.021 6.041z"
            fill="#34A853"
          />
          <Path
            d="M8.837 17.13a6.61 6.61 0 01-.374-2.168c0-.755.137-1.486.362-2.168l-.006-.145-3.507-2.661-.114.053A10.77 10.77 0 004 14.962c0 1.766.436 3.435 1.197 4.921l3.64-2.753"
            fill="#FBBC05"
          />
          <Path
            d="M15.22 8.239c2.106 0 3.527.889 4.337 1.632l3.166-3.02C20.778 5.083 18.248 4 15.219 4c-4.387 0-8.177 2.46-10.021 6.041l3.627 2.753a6.767 6.767 0 016.394-4.555"
            fill="#EB4335"
          />
        </G>
        <Defs>
          <ClipPath id="prefix__clip0">
            <Path fill="#fff" transform="translate(4 4)" d="M0 0h22v22H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    )
  }  

export function SideArrow(props) {
  return (
    <Svg
      width={8}
      height={13}
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.375 1.625l5.25 5-5.25 5"
        stroke="#304B65"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function WarningSign(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.931 7v2m0 4h.01m-6.938 4H16.86c1.54 0 2.502-1.667 1.732-3L11.663 2C10.893.667 8.97.667 8.2 2L1.271 14c-.77 1.333.192 3 1.732 3z"
        stroke="#F80000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}