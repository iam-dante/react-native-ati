/**
 * This is the Home Screen
 */
import React from 'react'
import { StyleSheet, Text,View, ScrollView} from 'react-native'
import MainContainer from '../../../components/containers/Container/MainContainer'
import { Font, FontStyle } from '../../../internals/theme/fonts'
import BlinkView from 'react-native-blink-view'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

const DayTag = ({ label }) => {
    return (
        <View style={{ 
            alignItems: 'center', 
            justifyContent:'center', 
            flexDirection: 'row', 
            paddingHorizontal: 12, 
            height: 35, 
            paddingVertical: 8, 
            marginHorizontal: 5, 
            backgroundColor: '#FFF', 
            borderRadius: 2 }}>
            <Text style={{ ...Font.baseStyle }}>{label}</Text>
        </View>
    )
}

const text = StyleSheet.create({
    white: {
        color: '#FFF'
    },
    gray: {
        color: '#827D7D'
    },
    black: {
        color: '#000'
    }
})

const ClassCard = ({ subject, title, venue, time, live}) => {
    const paddingHorizontal = 16

    return (
        <View style={{
            width: '100%',
            height: 100,
            position: 'relative',
            paddingHorizontal,
            paddingVertical: 10,
            borderRadius: 4,
            marginBottom: 12,
            backgroundColor: '#fff',
        }}>
            <Text style={{ ...Font.baseStyle, ...text.black, fontSize: 24, ...FontStyle.bold }}>{subject}</Text>
            <Text style={{ ...Font.baseStyle, ...text.gray }}>{title}</Text>
            <View style={{
                position: 'absolute',
                flexDirection: 'row',
                flex: 1,
                // backgroundColor: '#ccc',
                width: '110%',
                paddingHorizontal,
                justifyContent: 'space-between',
                alignItems: 'center',
                bottom: 10, // should match paddingVertical
            }}>
                <Text style={{...Font.baseStyle, textTransform: 'uppercase'}}>{venue}</Text>

                {/* timed or live status */}

                <View style={{backgroundColor: live ? '#FF7D7D': '#039E09', borderRadius:10, paddingHorizontal:4, flexDirection:'row', alignItems:'center'}}>
                    {
                        live ?
                        (   <BlinkView blinking delay={1000} >
                                <View style={{height:10, width:10, backgroundColor:'red', borderRadius:5, marginHorizontal:2}} />
                            </BlinkView>
                        ): null
                    }
                    <Text style={{...Font.baseStyle, marginHorizontal:4, textTransform: 'uppercase', color:'#FFFFFF'}}>{time}</Text>
                </View>
                {/* <View>
                </View> */}
            </View>
        </View>
    )
}

function UniversityScreen () {
    return (
        <MainContainer style={styles.container}>
            <View style={{ padding: 16, width: '100%' }}>
                <Text style={{...Font.displayStyle, color:'#FFFFFF',}}>University Exams</Text>
            </View>

            <View style={{width:'100%', height: 40, marginVertical: 10}}>

            <ScrollView 
                        horizontal 
                        alwaysBounceHorizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%', paddingHorizontal:50}}>
                        {
                            (['WEEK 01', 'WEEK 02', 'WEEK 03']).map((day, ix) => (
                                <DayTag label={day} key={ix}/>
                            ))
                        }
            </ScrollView>
            </View>
            <ScrollView
                alwaysBounceVertical
                vertical
                style={{width:'100%', padding:10}}
            >
                <View style={{width:'100%', }}>
                    <Text style={{...Font.baseStyle, color:"#FFFFFF", padding:16, fontSize:18,  ...FontStyle.bold}}>MONDAY</Text>
                    <ClassCard subject='IS 214' title= 'Mobile Android Dev.' venue= 'D01 - Luhanga Hall' time= '1800 - 2000' />
                    <ClassCard subject='IS 233' title= 'Mobile Android Dev.' venue= 'D01 - Luhanga Hall' time= '1800 - 2000' />
                    
                
                </View>
                <View style={{width:'100%',}}>
                    <Text style={{...Font.baseStyle, color:"#FFFFFF", padding:16, fontSize:18, ...FontStyle.bold}}>TUESDAY</Text>
                    <ClassCard subject='IS 213' title= 'Mobile Android Dev.' venue= 'D01 - Luhanga Hall' time= '1800 - 2000' live/>
                    <ClassCard subject='IS 213' title= 'Mobile Android Dev.' venue= 'D01 - Luhanga Hall' time= '1800 - 2000' />
                    <ClassCard subject='IS 213' title= 'Mobile Android Dev.' venue= 'D01 - Luhanga Hall' time= '1800 - 2000' />
                
                </View>
            </ScrollView>
        </MainContainer>
    )
}

export default UniversityScreen
