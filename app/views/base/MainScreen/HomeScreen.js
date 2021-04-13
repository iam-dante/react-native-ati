/**
 * This is the Home Screen
 */
import React from 'react'
import MainContainer from '../../../components/containers/Container/MainContainer'
import Text from '../../../components/typography/Text'


function HomeScreen () {
    return (
        <MainContainer style={{justifyContent: 'center',alignItems: 'center'}}>
            <Text>Home screen</Text>
        </MainContainer>
    )
}

export default HomeScreen
