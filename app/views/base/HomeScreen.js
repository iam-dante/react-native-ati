import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'

function HomeScreen() {
    return(
        <View style={styles.screen}>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        backgroundColor:'#304B65',

    }
})

export default HomeScreen