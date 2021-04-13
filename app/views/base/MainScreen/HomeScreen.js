/**
 * This is the Home Screen
 */
import React, { useContext } from 'react'
import {View,Text} from 'react-native'
import MainContainer from '../../../components/containers/Container/MainContainer'
import {Avatar} from 'react-native-paper'
import { AuthContext } from '../FirebaseConfig'
import { Font, FontStyle } from '../../../internals/theme/fonts'


function HomeScreen () {
    const {user} = useContext(AuthContext)
    return (
        <MainContainer hidemenu>
            <View style={{width: '100%', height: 100, position: 'relative',flexDirection:'row',marginTop: 24}}>
                <View style={{paddingLeft:16, paddingTop:16}}>
                <Text style={{color: '#FFFFFF', ...Font.baseStyle}}>Welcome back,</Text>
                <Text style={{color: '#FFFFFF', ...Font.displayStyle}}>{user.displayName}</Text>
                </View>
                <Avatar.Image
                    style={{  position:"absolute", right: 16, top: 12}}
                    size={80}
                    source= {{
                        uri : user.photoURL
                    }}
                        
                />
            </View>

            <View style={{backgroundColor: 'yellow', height: 100, width: '100%',marginTop:"10%"}}>
                <Text>You have 3 classes </Text>
            </View>
        </MainContainer>
    )
}

export default HomeScreen
