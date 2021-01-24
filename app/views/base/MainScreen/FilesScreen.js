/**
 * This is the Home Screen
 */
import React from 'react'
import { StyleSheet, View, ScrollView, Text} from 'react-native'
import MainContainer from '../../../components/containers/Container/MainContainer'
import { FileIcon } from '../../../components/vectors/icons'
import { Font, FontStyle } from '../../../internals/theme/fonts'



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
            
            <View style={{width:'95%', height: 100, backgroundColor:'#ffffff', borderRadius:5, flexDirection:'row', alignItems:'center', padding:16}}>
                
                <FileIcon style={{width:35, height:35}}/>
                
                <View style={{padding:16}}>
                <Text style={{...Font.baseStyle, fontSize: 24, ...FontStyle.bold}}>MT100</Text>
                <Text style={{color:'blue'}}>FOUNDATION ANALYSIS</Text>
                </View>
            </View>


           
            
        </MainContainer>
    )
}

export default FilesScreen
