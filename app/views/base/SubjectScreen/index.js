/**
 * This is the Home Screen
 */
import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import MainContainer, { viewStyles } from '../../../components/containers/Container/MainContainer'
import { Font, FontStyle } from '../../../internals/theme/fonts'


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

function SubjectScreen () {
    return (
        <MainContainer style={styles.container}>
            <View style={{ padding:16, width: '100%' }}>
                <Text style={{ ...Font.displayStyle,color:'#FFFFFF'}}>My Subjects</Text>
            </View>
            <ScrollView
                style={{width: '100%', paddingHorizontal: viewStyles.padded.padding}}
                alwaysBounceVertical
                
            >

                <View style={{width:'100%', height:100, flexDirection:'column', borderRadius: 5, backgroundColor:'#FFFFFF', justifyContent:'center',}}>
                    <View style={{paddingLeft:32}}>
                        <Text style={{...Font.baseStyle, color:'#000000',fontSize: 24, ...FontStyle.bold }}>IS 234</Text>
                        <Text style={{color:'#0068C8', ...Font.baseStyle}}>Mobile Developement</Text>
                    </View>
                </View>
                
            </ScrollView>
        </MainContainer>
    )
}

export default SubjectScreen
