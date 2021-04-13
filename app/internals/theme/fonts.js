import { StyleSheet } from 'react-native'

/**
 * Used font styles
 */
const BASE_FONT = 'DMSans-Regular'
const BOLD_FONT = 'DMSans-Bold'

// Building fonts for the app
export const Font = StyleSheet.create({
    baseStyle: {
        fontSize: 16,
        fontFamily: BASE_FONT
    },
    displayStyle: {
        fontSize: 40,
        fontFamily: BASE_FONT
    }
})

// Building fonts for the app
export const FontStyle = StyleSheet.create({
    bold: {
        fontFamily: BOLD_FONT
    },
    regular: {
        fontFamily: BASE_FONT
    }
})
