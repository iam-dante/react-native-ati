import 'react-native-gesture-handler'

import * as React from 'react'
// import LoginScreen from './app/views/first/LoginScreen'
// import Base from './app/views/base/first/LoginScreen'

import InitialScreen from './app/views/base/first/Base'
// import ScheduleScreen from './app/views/base/MainScreen/ScheduleScreen'
// import HomeScreen from './app/views/base/MainScreen/HomeScreen'
import SplashScreen from 'react-native-splash-screen'
// import CoreApp from './app/views/base/Base';
import LoginScreen from './app/views/base/first/LoginScreen'
// import FillScreen  from './app/views/base/first/FillScreen'


// console.disableYellowBox = true;

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
        <>
            {/* <InitialScreen /> */}
            <LoginScreen/>
            {/* <Base/>  */}
            {/* <FillScreen/> */}
            {/* <CoreApp/>  */}
        </>
    );
}

