
import React, {useContext, useEffect, useState} from 'react'
import { View, Text, StatusBar,SafeAreaView, TouchableOpacity } from 'react-native'
import { ATiLogo } from '../../SplashScreen'
import { Button } from 'react-native-elements'
import {GoogleIcon} from '../../../components/vectors/icons'

import {AuthContext} from '../FirebaseConfig'
import Spinner from 'react-native-loading-spinner-overlay';
import Svg, { Path } from "react-native-svg"
import { useSpring, animated } from '@react-spring/native'


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

const GoogleSignInButton = ({ onPress }) => {
    return (
        <Button
            onPress={onPress}
            icon={<GoogleIcon/>}
            iconRight
            buttonStyle={{ paddingHorizontal: 30, width: '80%', paddingVertical: 10, borderRadius: 300,  flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center'}}
            titleStyle={{ fontStyle: 'normal', fontFamily: 'DMSans-Bold' }} title="Sign in with Google" />
    )
}


const LoginSection = ({ style }) => {
  
  const {loginGoogle} = useContext(AuthContext)

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", ...style }} >
            {/* Button */}
            <GoogleSignInButton onPress={() =>loginGoogle()} /> 
            {/* SubText */}
            <Text style={{ fontSize: 11, color: '#9E9A9A', marginVertical: 5, fontFamily: 'DMSans-Italic'}}>Exclusive to invited members only.</Text>
        </View>
    )
}



export default function () {
    const {spinner, toast, showToast} = useContext(AuthContext)
    

  return (
      <>
        <StatusBar backgroundColor='#000000' />
        <Spinner
            visible={spinner}
            color="#8DACC9'"
            animation='slide'
        />
        <SafeAreaView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IntroSection style={{ flexGrow: 0.8, paddingHorizontal: '10%'}} />
            <LoginSection style={{ flexGrow: 0.2 }} />
        {
            toast ?
            <ToastMessage
                headTitle='Warning'
                onFinish={() => showToast(false)}
                subTitle='Some wrong with the internet connection'
                icon={<WarningSign/>}       
            /> : null
        }    
        </SafeAreaView>
    

      </>
    )
}

function WarningSign(props) {
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
  

  function ToastMessage({headTitle, subTitle, icon, onFinish}){
    const [flip, set] = useState(false)
    const AnimatedView = animated(View)
    const props = useSpring({ to: { bottom: 2 }, from: { bottom: -100 }, delay:2000, reverse: flip, config:{mass:2, friction:24}, onRest: () => {
        set(!flip)
    } })


      return(

        <AnimatedView style={{height:90, zIndex:999,  width:'100%', paddingHorizontal:12,paddingBottom:12, position:'absolute', ...props}}>
            <View style={{width:'100%', backgroundColor:'#FFE4E4', height:'100%', borderRadius:5, flexDirection:'row', alignItems:'center', paddingHorizontal:20, elevation:2}}>
                {icon}
                <View style={{paddingHorizontal:16, paddingVertical:12}}>
                <Text style={{fontSize:20, color:'#FF0000'}}>{headTitle}</Text>
                <Text style={{color:'#7B7272'}}>{subTitle}</Text>
                </View>
            </View>
        </AnimatedView>

      )
  }

