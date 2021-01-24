/**
 * This is the main container that is used
 * across all or most screens in the apps
 */
import React from 'react'
import _BaseContainer from './_BaseContainer'
import { View, StyleSheet } from 'react-native'
import { ATiLogoMini } from '../../vectors/logo'
import { colors } from '../../../internals/theme'
import { StatusBar } from 'react-native'

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

export default function MainContainer ({style, children}) {
    return (
        <_BaseContainer 
            statusBar={() => (
                <StatusBar
                    hidden={false}
                    backgroundColor={colors.primary.dark} />
            )}  
            containerStyle={styles.containerStyle}>
            <View style={{ flexGrow: 0.04, flexDirection: 'row', alignItems: 'center', position: 'relative', ...viewStyles.padded }}>
                <ATiLogoMini width={40} height={40} />

                {/* Logo */}
                <View style={{ position: 'absolute', right: 16, borderRadius: 100, width: 38, height: 38, backgroundColor: '#3EE294' }}></View>
            </View>
            <View style={{ flex: 1, width: '100%', ...style}}>{children}</View>
        </_BaseContainer>
    )
}

