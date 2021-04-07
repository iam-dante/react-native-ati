/**
 * This is the main container that is used
 * across all or most screens in the apps
 */
import React from 'react'
import _BaseContainer from './_BaseContainer'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { ATiLogoMini } from '../../vectors/logo'
import { colors } from '../../../internals/theme'
import { StatusBar, Button } from 'react-native'
import { Avatar} from 'react-native-paper'

import {useNavigation} from '@react-navigation/native'


// import { useNavigation } from '@react-navigation/drawer'

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: colors.primary.main
    },
})

export const viewStyles = StyleSheet.create({
    padded: {
        padding: 16
    }
})

export default function MainContainer ({style, children, hide}) {
    const navigation = useNavigation();

    return (
        <_BaseContainer 
            statusBar={() => (
                <StatusBar
                    hidden={false}
                    backgroundColor={colors.primary.dark} />
            )}  
            containerStyle={styles.containerStyle}>
            <View style={{ flexGrow: 0.04, flexDirection: 'row', justifyContent:'center', alignItems: 'center', position: 'relative', ...viewStyles.padded }}>
                <ATiLogoMini width={40} height={40} />

                <TouchableOpacity
                    onPress={() => {navigation.openDrawer()}
                    } 
                    style={{ position: 'absolute', right: 16,}}
                    
                    // borderless={true}
                >
                <Avatar.Image
                        source = {{
                            uri: 'https://lh6.ggpht.com/_NNjxeW9ewEc/TMQbkhyTs7I/AAAAAAAAOPk/ARL6qcIjQR8/tmpAF14_thumb_thumb1.jpg?imgmax=800'
                        }}
                        size={56}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, position:'relative', width: '100%', ...style}}>
                {children}
                {
                    !hide ? <View style={{position:'absolute', width: '100%',height:'36%', backgroundColor:'#8DACC9', zIndex:-10, bottom:0}}/>: null
                }
                
            </View>
            
        </_BaseContainer>
    )
}
 
