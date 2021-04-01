/**
 * This is the Home Screen
 */
import React from 'react'
import { StyleSheet, View, ScrollView, Text,} from 'react-native'
import MainContainer, { viewStyles } from '../../../components/containers/Container/MainContainer'
import { FileIcon } from '../../../components/vectors/icons'
import { Font, FontStyle } from '../../../internals/theme/fonts'
import {TouchableRipple} from 'react-native-paper'



const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',

    }
})

function FilesScreen () {
    return (
        <MainContainer style={styles.container}>
            <View style={{width: '100%' }}>
                <Text style={{ ...Font.displayStyle, color:'white', padding:16}}>Class File</Text>
            </View>

            <ScrollView
                style={{width:'100%', paddingHorizontal: viewStyles.padded.padding}}   
            >
                <TouchableRipple  
                    style={{width:'100%',backgroundColor:'#ffffff',height:100, borderRadius:5,marginBottom:10}}
                    onPress={()=> console.log('Clicked')}
                    rippleColor='#8DACC9'
                > 
                    <View style={{width:'95%',height:100, borderRadius:5, flexDirection:'row', alignItems:'center',padding:16,}}>
                        <View style={{padding:16}}>
                            <FileIcon style={{width:35, height:35}}/>
                        </View>
                        
                        <View style={{padding:16}}>
                            <Text style={{...Font.baseStyle, fontSize: 24, ...FontStyle.bold}}>MT100</Text>
                            <Text style={{color:'#0068C8', ...Font.baseStyle}}>Foundation Analysis</Text>
                        </View>
                    </View>
                </TouchableRipple>
                </ScrollView>
        </MainContainer>
    )
}

export default FilesScreen
