import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import MainContainer from '../../../components/containers/Container/MainContainer'
import { ATiLogoMini } from '../../../components/vectors/logo'
import { Font, FontStyle } from '../../../internals/theme/fonts'
import BlinkView from 'react-native-blink-view'

const view = StyleSheet.create({
    padded: {
        padding: 16
    }
})

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

const DayTag = ({ label }) => {
    return (
        <View style={{ 
            alignItems: 'center', 
            justifyContent:'center', 
            flexDirection: 'column', 
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

/**
 * TODO: Compute the live graphics from the time computed for the user
 * TODO: add more date time related infomation for ease computation
 */
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
                        (   <BlinkView blinking delay={1000}>
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

/**
 * DUMMY DATA
 */
const userSubjectData = [
    { subject: 'MT 100', title: 'Foundation Analysis', venue: 'Yombo 03', time: '0900 - 1000' },
    { subject: 'CL 111', title: 'Communication Skills', venue: 'D01 - Luhanga Hall', time: 'live', live: true },
    { subject: 'DS 112', title: 'Development Studies', venue: 'Seminar 06', time: '1200 - 1300' },
    { subject: 'IS 362', title: 'Mobile Android Dev.', venue: 'D01 - Luhanga Hall', time: '1800 - 2000' },
    { subject: 'IS 362', title: 'Mobile Android Dev.', venue: 'D01 - Luhanga Hall', time: '1800 - 2000' },
    { subject: 'IS 362', title: 'Mobile Android Dev.', venue: 'D01 - Luhanga Hall', time: '1800 - 2000' },
]

function ScheduleScreen () {
    return (
        <MainContainer>
            <View style={{ ...view.padded, width: '100%' }}>
                <Text style={{ ...Font.displayStyle, ...text.white }}>Schedule</Text>
                
            </View>
            {/* Selection of the subjects */}
            <View style={{ flex: 1, width: '100%'}}>
                {/* weekly options for the schedule */}
                <View
                    style={{ width: '100%', height: 50, marginVertical: 10 }}>

                    <ScrollView 
                        horizontal 
                        alwaysBounceHorizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%'}}>
                        {
                            (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']).map((day, ix) => (
                                <DayTag label={day} key={ix}/>
                            ))
                        }
                    </ScrollView>
                </View>

                {/* Actual content for the page */}
                {/* TODO: Add ScrollView */}
                
                <ScrollView
                    alwaysBounceVertical
                    style={{paddingHorizontal:14, }}
                
                >
                    {
                        userSubjectData.map((props, ix) => (
                            <ClassCard key={`class-card-${ix}`} {...props}/>
                        ))
                    }
                </ScrollView>
                
            </View>
        </MainContainer>
    )
}

export default ScheduleScreen
