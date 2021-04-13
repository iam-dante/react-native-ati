/*
 * The about screen that holds more link of information about the app
 */


import React from 'react'
import { StyleSheet, View, Text,ScrollView, Linking, Share } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MainContainer from '../../../components/containers/Container/MainContainer'
import { ShareIcon, BugIcon, StarIcon, InstagramIcon, TwitterIcon,DribbleIcon, TelegramIcon, InfoIcon, AtIcon} from '../../../components/vectors/icons'
import { Font, FontStyle } from '../../../internals/theme/fonts'



function AboutScreen () {
    return (
        <MainContainer style={{justifyContent: 'flex-start',alignItems: 'center'}} hide>

            <View style={{width: '100%' }}>
                <Text style={{ ...Font.displayStyle, color:'#FFFFFF', padding:16}}>About</Text>
            </View>

            <ScrollView
                vertical
                alwaysBounceVertical
                style={{width:'100%', padding:16,}}
            >

{/* Support Development  */}
            <View style={{borderRadius:10, width:'100%', borderColor:'#FFFFFF', borderWidth: 1, marginBottom: 24}}>
                <Text style={{color:'#FFFFFF', padding:16, ...Font.baseStyle, fontSize:14}}>SUPPORT DEVELOPMENT</Text>
                <TouchableOpacity
                    onPress={()=> {
                        Share.share({
                            message: 'Download this app For university student https://blog.bam.tech/developer-news/sharing-content-with-react-native',
                            //IOS use url to display it 
                            url: "https://blog.bam.tech/developer-news/sharing-content-with-react-native"
                        },{
                            dialogTitle:''
                        }
                        )
                    }}
                >
                    <View style={{flexDirection:'row', width: '100%', padding: 16, alignItems:'center'}}>
                        <ShareIcon width={24} height={24}/>
                        <View style={{paddingLeft:24}}>
                            <Text style={{fontSize: 20, color: '#FFFFFF', ...Font.baseStyle}}>Share</Text>
                            <Text style={{color:'#FFFFFF'}}>Share the app with your friends</Text>
                        </View>
                    </View>

                </TouchableOpacity>

                <View style={{flexDirection:'row', width: '100%', padding: 16, alignItems:'center'}}>
                    <BugIcon width={24} height={24}/>
                    <View style={{paddingLeft: 24}}>
                        <Text style={{fontSize: 20, color: '#FFFFFF', ...Font.baseStyle}}>Report Bug</Text>
                        <Text style={{color:'#FFFFFF'}}>Report any concern bugs</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', width: '100%', padding: 16, alignItems:'center'}}>
                    <StarIcon width={24} height={24}/>
                    <View style={{paddingLeft: 24}}>
                        <Text style={{fontSize: 20, color: '#FFFFFF', ...Font.baseStyle}}>Rate the app </Text>
                        <Text style={{color:'#FFFFFF'}}>Love this app tell us in Google Play Store</Text>
                    </View>
                </View>
            </View>

{/* Social  */}

            <View style={{borderRadius:10, width:'100%', borderColor:'#FFFFFF', borderWidth: 1, marginBottom:24}}>
                <Text style={{color:'#FFFFFF', padding:16, ...Font.baseStyle, fontSize:14}}>SOCIAL</Text>

                <TouchableOpacity
                    onPress={()=>{
                        Linking.openURL('https://www.instagram.com/steve_smith49/?hl=en')
                    }}      
                >
                    <View style={{flexDirection:'row', width: '100%', padding: 16, alignItems:'center'}}>
                        <InstagramIcon width={24} height={24}/>
                        <View style={{paddingLeft:24}}>
                            <Text style={{fontSize: 20, color: '#FFFFFF', ...Font.baseStyle}}>Instagram</Text>
                            <Text style={{color:'#FFFFFF'}}>Look on the new looks</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection:'row', width: '100%', padding: 16, alignItems:'center'}}>
                    <TwitterIcon width={24} height={24}/>
                    <View style={{paddingLeft: 24}}>
                        <Text style={{fontSize: 20, color: '#FFFFFF', ...Font.baseStyle}}>Twitter</Text>
                        <Text style={{color:'#FFFFFF'}}>Get update with what new</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', width: '100%', padding: 16, alignItems:'center'}}>
                    <TelegramIcon width={24} height={24}/>
                    <View style={{paddingLeft: 24}}>
                        <Text style={{fontSize: 20, color: '#FFFFFF', ...Font.baseStyle}}>Telegram </Text>
                        <Text style={{color:'#FFFFFF'}}>Join us in telegram to discuss your suggestion and more </Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', width: '100%', padding: 16, alignItems:'center'}}>
                    <DribbleIcon width={24} height={24}/>
                    <View style={{paddingLeft: 24}}>
                        <Text style={{fontSize: 20, color: '#FFFFFF', ...Font.baseStyle}}>Dribble</Text>
                        <Text style={{color:'#FFFFFF'}}>Inspired and past designs</Text>
                    </View>
                </View>
            </View>

{/* OTHER */}

            <View style={{borderRadius:10, width:'100%', borderColor:'#FFFFFF', borderWidth: 1, marginBottom: 24}}>
                <Text style={{color:'#FFFFFF', padding:16, ...Font.baseStyle, fontSize:14}}>OTHER</Text>
                <View style={{flexDirection:'row', width: '100%', padding: 16, alignItems:'center'}}>
                    <AtIcon width={24} height={24}/>
                    <View style={{paddingLeft:24}}>
                        <Text style={{fontSize: 20, color: '#FFFFFF', ...Font.baseStyle}}>ATi</Text>
                        <Text style={{color:'#FFFFFF'}}>Adam's Time Table</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', width: '100%', padding: 16, alignItems:'center'}}>
                    <InfoIcon width={24} height={24}/>
                    <View style={{paddingLeft: 24}}>
                        <Text style={{fontSize: 20, color: '#FFFFFF', ...Font.baseStyle}}>Version</Text>
                        <Text style={{color:'#FFFFFF'}}>1.1.0</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
        </MainContainer>
    )
}

export default AboutScreen
