import React from 'react'
import { Text as RNEText } from 'react-native-elements'
import { Font, FontStyle } from '../../internals/theme/fonts'

/**
 * Get the application Text
 */
function Text ({ children, ...TextProps}) {
    return (
        <RNEText {...TextProps} style={{ ...Font.baseStyle }}>{children}</RNEText>
    )
}

export default Text
