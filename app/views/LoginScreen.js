import React from 'react'
import { View, Text } from 'react-native'
import { ATiLogo } from './SplashScreen'
import { Button } from 'react-native-elements'
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"


const IntroSection = ({ style }) => {
    return (
        <View style={{ flexGrow: 0.8, justifyContent: "center", alignItems: "flex-start", ...style}} >
            <ATiLogo style={{ marginVertical: 10 }} />
            <Text style={{ fontSize: 16, fontFamily: 'DMSans-Regular'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras bibendum mauris vitae tellus mollis sollicitudin. Cras efficitur sollicitudin tempor. 
                Suspendisse fels diam, malesuada non risus nec, tincidunt vestibulum erat.
            </Text>
        </View>
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





const GoogleSignInButton = ({ onPress }) => {
    return (
        <Button
            onPress={onPress}
            icon={<GoogleIcon/>}
            iconRight
            containerStyle={{backgroundColor: 'blue' }}
            buttonStyle={{ paddingHorizontal: 30, width: '80%', paddingVertical: 10, borderRadius: 300,  flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center'}}
            titleStyle={{ fontStyle: 'normal', fontFamily: 'DMSans-Bold' }} title="Sign in with Google" />
    )
}

const LoginSection = ({ style }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", ...style }} >
            {/* Button */}
            <GoogleSignInButton onPress={() => console.log('Clicked')} />

            {/* SubText */}
            <Text style={{ fontSize: 11, color: '#9E9A9A', marginVertical: 5, fontFamily: 'DMSans-Italic'}}>Exclusive to invited members only.</Text>
        </View>
    )
}

export default () => {
    
    return (
        <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IntroSection style={{ flexGrow: 0.8, paddingHorizontal: '10%'}}/>
            <LoginSection style={{ flexGrow: 0.2 }}/>
        </View>
    )
}
