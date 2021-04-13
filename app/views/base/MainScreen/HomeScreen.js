/**
 * This is the Home Screen
 */
import React, { useContext } from 'react'
import {View,Text} from 'react-native'
import MainContainer from '../../../components/containers/Container/MainContainer'
import {Avatar} from 'react-native-paper'
import { AuthContext } from '../FirebaseConfig'


function HomeScreen () {
    const {user} = useContext(AuthContext)
    return (
        <MainContainer hidemenu>
            <View style={{width: '100%', height: 100, position: 'relative',flexDirection:'row',marginTop: 24}}>
                <View style={{paddingLeft:30, paddingTop:16}}>
                <Text style={{fontSize:18, color: '#FFFFFF'}}>Welcome back,</Text>
                <Text style={{fontSize: 40, color: '#FFFFFF'}}>{user.displayName}</Text>
                </View>
                <Avatar.Image
                    style={{  position:"absolute", right: 16, top: 12}}
                    size={80}
                    source= {{
                        uri : user.photoURL
                    }}
                        
                />
            </View>
        </MainContainer>
    )
}

export default HomeScreen
