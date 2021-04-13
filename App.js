import React, { useEffect, useState } from 'react'
import {View, Text} from 'react-native'
import LoginScreen from './app/views/LoginScreen'
import SplashScreen from 'react-native-splash-screen'


export default () => {
    // const [doneLoading, setDoneLoading] = useState(false)

    // useEffect(() => {
    //     const abc = setTimeout(() => {
    //         setDoneLoading(true)
    //     }, 2000)

    //     return clearTimeout(abc)
    // }, [])

    // if (doneLoading) {
        SplashScreen.hide()
    // }

    return (
        // <SplashScreen />
        <LoginScreen />
    );
}

