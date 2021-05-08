
import React, {useContext} from 'react'
import { View, Text, StatusBar,SafeAreaView, TouchableOpacity } from 'react-native'
// import { ATiLogo } from '../../SplashScreen'
// import { Button } from 'react-native-elements'
import {GoogleIcon, WarningSign, ATiLogo} from '../../../components/vectors/icons'
import {AuthContext} from '../ContentProvider'
import Spinner from 'react-native-loading-spinner-overlay';
import { useTransition } from '@react-spring/native'
import ToastMessage from '../../../components/components/ToastMessage'


const IntroSection = ({ style }) => {
    return (
        <View style={{ flexGrow: 0.8, justifyContent: "center", alignItems: "flex-start", ...style,}} >
            <ATiLogo style={{ marginVertical: 10 }} />
            <Text style={{ fontSize: 16, fontFamily: 'DMSans-Regular', }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras bibendum mauris vitae tellus mollis sollicitudin. Cras efficitur sollicitudin tempor. 
                Suspendisse fels diam, malesuada non risus nec, tincidunt vestibulum erat.
            </Text>
        </View>
    )
}

const GoogleSignInButton = ({ onPress }) => {
    return (
        // <Button
        //     onPress={onPress}
        //     icon={<GoogleIcon/>}
        //     iconRight
        //     buttonStyle={{ paddingHorizontal: 30, width: '80%', paddingVertical: 10, borderRadius: 300,  flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center'}}
        //     titleStyle={{ fontStyle: 'normal', fontFamily: 'DMSans-Bold' }} title="Sign in with Google" />
        <TouchableOpacity
            onPress={onPress}
            activeOpacity= {200}
        >   
        <View  style={{paddingHorizontal: 30, width: '80%',height:53, borderRadius: 300,  flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center', backgroundColor: '#1D8EC2'}}>
        <GoogleIcon/>
        <Text style={{fontStyle: 'normal', fontFamily: 'DMSans-Bold', color: 'white', fontSize: 18}}>Sign in with Google</Text>
        </View>
        </TouchableOpacity>

        
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


    //Configuration for the transitons
    const props = useTransition(toast,{
    from: {  bottom: -100 },
    enter: { bottom: 2 },
    config:{mass:12, friction:40},
    leave: { bottom: -100 },
    onRest: () => showToast(false)
})


    

  return (
      <>
        <StatusBar backgroundColor='#000000' />    

        {/* Loading spinner */}
        <Spinner
            visible={spinner}
            color="#8DACC9"
            animation='slide'
        />

        <SafeAreaView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IntroSection style={{ flexGrow: 0.8, paddingHorizontal: '10%', }} />
            <LoginSection style={{ flexGrow: 0.2 }} />
  
          {
            props((style, item) => item ?
              (<ToastMessage
                headTitle= "Warning"
                headTitleColor={{color: "#FF0000" }}
                subTitle= "Some wrong with the internet connection"
                icon={<WarningSign/>}
                backGroundColor={{backgroundColor : "#FFE4E4"}}
                style={style}
              />)
              
              : null)

          }
        </SafeAreaView>
      </>
    )
}
