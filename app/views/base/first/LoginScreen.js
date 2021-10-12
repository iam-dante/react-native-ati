
import React, {useContext, useEffect, useState} from 'react'
import { View, Text, StatusBar,SafeAreaView } from 'react-native'
import { ATiLogo } from '../../SplashScreen'
import { Button } from 'react-native-elements'
import {GoogleIcon} from '../../../components/vectors/icons'

import {AuthContext} from '../FirebaseConfig'


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
  return (
      <>
        <StatusBar backgroundColor='#000000' />
        <SafeAreaView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IntroSection style={{ flexGrow: 0.8, paddingHorizontal: '10%'}} />
            <LoginSection style={{ flexGrow: 0.2 }} />
        </SafeAreaView>
      </>
    )
}
