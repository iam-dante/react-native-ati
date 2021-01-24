/**
 * This is the Home Screen
 */
import React from 'react'
import { StyleSheet } from 'react-native'
import MainContainer from '../../../components/containers/Container/MainContainer'
import Text from '../../../components/typography/Text'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function SubjectScreen () {
    return (
        <MainContainer style={styles.container}>
            <Text>Subject screen</Text>
        </MainContainer>
    )
}

export default SubjectScreen
