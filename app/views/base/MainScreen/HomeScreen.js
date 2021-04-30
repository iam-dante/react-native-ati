/**
 * This is the Home Screen
 */
import React, { useContext, useState } from 'react'
import {View,Text,StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import MainContainer from '../../../components/containers/Container/MainContainer'
import {Avatar} from 'react-native-paper'
import { AuthContext } from '../ContentProvider'
import { Font, FontStyle} from '../../../internals/theme/fonts'
import { SideArrow } from '../../../components/vectors/icons'
import BlinkingView from '../../../components/components/BlinkingView'


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
                        (  
                            <BlinkingView/> 
                            
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
 *Dumb data  
 */ 
const userSubjectData = [
    { subject: 'CL 111', title: 'Communication Skills', venue: 'D01 - Luhanga Hall', time: 'live', live: true },
]


function HomeScreen () {
    const {user} = useContext(AuthContext)
    const [state, setState] = useState(true)

    return (
        <MainContainer hidemenu>
            <View style={{width: '100%', height: 100, position: 'relative',flexDirection:'row',marginTop: 24}}>
                <View style={{paddingLeft:16, paddingTop:16}}>
                <Text style={{color: '#FFFFFF', ...FontStyle.regular, fontSize: 18,}}>Welcome back,</Text>
                <Text style={{color: '#FFFFFF', ...Font.displayStyle,}}>{user.displayName}</Text>
                </View>
                <Avatar.Image
                    style={{  position:"absolute", right: 24, top: 12}}
                    size={80}
                    source= {{
                        uri : user.photoURL
                    }}
                        
                />
            </View>

            <View style={state ?{height: 160, width: '100%',marginTop:"15%", paddingHorizontal:16, overflow: 'hidden'} :{ width: '100%',marginTop:"20%", paddingHorizontal:16}}>
                <Text style={{color: '#FFFFFF', ...FontStyle.regular,marginTop: 12, marginBottom: 24, fontSize: 18}} >You have N classes </Text>
            
                    {
                        userSubjectData.map((props, ix) => (
                            <ClassCard key={`class-card-${ix}`} {...props}/>
                        ))
                    }

            </View>
            <TouchableOpacity
                onPress={()=>{setState(false)}}
            >
                {
                    state ? 
                <View  style ={{height: 50, backgroundColor:'#D9E6FF', width:'32%', marginLeft: 16,marginTop: 12, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 4, overflow: 'scroll'}}>
                    <Text style={{...FontStyle.regular, fontSize: 16}}>See Others</Text>
                    <SideArrow/>
                </View> : null

                }
            </TouchableOpacity>
        </MainContainer>
    )
}


export default HomeScreen
