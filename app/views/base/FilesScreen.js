/**
 * This is the Home Screen
 */
import React from 'react'
import { StyleSheet } from 'react-native'
import MainContainer from '../../components/containers/Container/MainContainer'
import Text from '../../components/typography/Text'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function FilesScreen () {
    return (
        <MainContainer style={styles.container}>
            <Text>Files screen</Text>
        </MainContainer>
    )
}

export default FilesScreen
