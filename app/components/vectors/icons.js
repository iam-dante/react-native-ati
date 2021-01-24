import * as React from "react"
import Svg, { Path } from "react-native-svg"


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
