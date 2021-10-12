import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'

/**
 * Building the stylesheet for 
 * the container
 */
// const styles = StyleSheet.create({
//     /**
//      * This is for the element status bar
//      */
//     barStyle: {

//     },
//     /**
//      * This is for the wrapping container view
//      */
//     containerStyle: {

//     }
// })

function _BaseContainer ({ children, statusBar, containerStyle }) {
    return (
        <>
        {statusBar()}
        {/* <StatusBar {...statusBarProps}/> */}
        <SafeAreaView style={containerStyle}>
            {children}
        </SafeAreaView>
        </>
    )
}


export default _BaseContainer

