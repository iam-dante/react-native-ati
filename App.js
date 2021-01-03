import 'react-native-gesture-handler';

import * as React from 'react'
import LoginScreen from './app/views/LoginScreen'
import ScheduleScreen from './app/views/base/ScheduleScreen';
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
        <ScheduleScreen />
    );
}

