import React from 'react';
import {View, StyleSheet} from 'react-native';
import{
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';
import{
    Avatar,
    Title,
    Text,
    Switch,
    TouchableRipple,
    Drawer,
} from 'react-native-paper'
import { Font } from '../../internals/theme/fonts';
// import { Font, FontStyle } from '../../../internals/theme/fonts'
// import { DrawerActions, NavigationContext, NavigationHelpersContext, useNavigation } from '@react-navigation/native'

export default function DrawerContent(props){
    return(
        <DrawerContentScrollView {...props}>
            <View style={{paddingVertical: 48}}>
                <View style={{flexDirection:'row', justifyContent: 'flex-start', paddingLeft: 16}}>
                    <Avatar.Image
                        source = {{
                            uri: 'https://lh6.ggpht.com/_NNjxeW9ewEc/TMQbkhyTs7I/AAAAAAAAOPk/ARL6qcIjQR8/tmpAF14_thumb_thumb1.jpg?imgmax=800'
                        }}
                        size={50}
                    />
                
                    <View style={{justifyContent:'center', alignContent:'center', marginHorizontal: 12}}>
                        <Text style={{fontSize:22, color:'#ffffff'}}>Nina Simone</Text>
                        <Text style={{fontSize:12, color: '#C6A5A5'}}>Ninasimone@gmail.com</Text>
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
                    label={() => <Text style={{ ...Font.baseStyle, color: '#FFF'}}>Log out</Text>}
                    labelStyle={{color:'#FF0000', color:''}}
                    style={{ width: '100%', paddingHorizontal: 16}}
                    onPress={() => {props.navigation.navigate('University')}}
                    />
            </Drawer.Section>
        </DrawerContentScrollView>
    );
}

