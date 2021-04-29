import React, { useContext } from 'react';
import {View, Alert} from 'react-native';
import{
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';
import{
    Avatar,
    Text,
    Drawer,
} from 'react-native-paper'
import { Font } from '../../internals/theme/fonts';
import { AuthContext } from './ContentProvider';
import {clearAll} from '../../core/AsyncStorage'


export default function DrawerContent(props){

    const {signOut, setstate, user, setUser} = useContext(AuthContext)
    // const navigation = useNavigation()

    const LogOut = () =>{  
        Alert.alert(  
            'Log Out',  
            'Are you sure ?',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => {},  
                    style:'cancel',   
                },  
                {text: 'OK', onPress: () => {
                    signOut()
                    clearAll()
                    setstate(false)
                    setUser('')
                }},  
            ]  
        );  
    }  
    
    return(
        <DrawerContentScrollView {...props}>
            <View style={{paddingVertical: 48}}>
                <View style={{flexDirection:'row', justifyContent: 'flex-start', paddingLeft: 16}}>
                    <Avatar.Image
                        source = {{
                            uri: user.photoURL
                        }}
                        size={50}
                    />
                
                    <View style={{justifyContent:'center', alignContent:'center', marginHorizontal: 12}}>
                        <Text style={{fontSize:22, color:'#ffffff'}}>{user.displayName}</Text>
                        <Text style={{fontSize:12, color: '#C6A5A5'}}>{user.email}</Text>
                    </View>
                </View>
            </View>
            <Drawer.Section style={{paddingVertical: 24, alignSelf: 'stretch'}}>
                <DrawerItemList {...props} />
            </Drawer.Section>

            <Drawer.Section style={{ 
                                flex: 1, 
                                alignItems:'center', 
                                borderTopColor: '#435F79',
                                borderTopWidth: 1,
                                justifyContent:'center', alignSelf: 'stretch', paddingVertical: 24, paddingHorizontal: 8, alignContent: 'stretch', }}>
                <DrawerItem
                    label={() => <Text style={{ ...Font.baseStyle, color: '#FF0000'}}>Log out</Text>}
                    labelStyle={{color:'#FF0000', color:''}}
                    style={{ width: '100%', paddingHorizontal: 16}}
                    onPress={() => {LogOut()}}
                    />
            </Drawer.Section>
        </DrawerContentScrollView>
    );
}

