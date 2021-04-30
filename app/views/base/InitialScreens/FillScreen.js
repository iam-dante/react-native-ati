import React, { useState, useRef, useEffect, useContext } from 'react'
import { View,Text,TouchableOpacity,ScrollView,StatusBar,} from 'react-native'
import {ATiLogoMini } from '../../../components/vectors/logo'
import { Font, FontStyle } from '../../../internals/theme/fonts'
import { Button } from 'react-native-elements'
import {DropArrow, OppsiteDropArrow, SuccessfullyLogo} from '../../../components/vectors/icons'
import { AuthContext } from '../ContentProvider'
import firestore from '@react-native-firebase/firestore'
import {storeData} from '../../../core/AsyncStorage'
import ToastMessage from '../../../components/components/ToastMessage'
import { useTransition } from '@react-spring/native'


export default function FillScreen(){

    const [show, hideToast] = useState(true)
    //Configuration for the transitons
    const props = useTransition(show,{
        from: {  bottom: -100 },
        enter: { bottom: 2 },
        config:{mass:12, friction:40},
        leave: { bottom: -100 },
        onRest: () => hideToast(false)
    })

     //The state that save the changes from the firbase
     const [data, uniData] = useState([])
     const [cs, coursesData] = useState([])
     const [ys, yearData] = useState([])
 
 
     //State that handles the changes on the UI
     const [hide, setState] = useState(true)
     const [stateUni, setUni] = useState()
 
     const [hideCosure, setStateCourse] = useState(true)
     const [cousre, setCourse] = useState()
 
     const [hideYear, setStateYear] = useState(true)
     const [year, setYear] = useState()
 
 
     //Context Provider of setRegister
     const {setRegister} = useContext(AuthContext)
 
 
 
     useEffect(() => {
         const university = firestore()
           .collection('university')
           .onSnapshot(doc => {
               // console.log(doc)
               doc.forEach(data =>{
                   const name = data.data().name
                //    console.log(name)
                   uniData(name)
                   setUni(name[0])
               })
               
           });
           const courses = firestore()
           .collection('courses')
           .onSnapshot(doc => {
               // console.log(doc)
               doc.forEach(data =>{
                   const name = data.data().name
                   coursesData(name)
                   setCourse(name[0])
               })
               
           });
 
           const years = firestore()
           .collection('years')
           .onSnapshot(doc => {
               // console.log(doc)
               doc.forEach(data =>{
                   const name = data.data().yearname
                   yearData(name)
                   setYear(name[0])
               })
               
           });
           // Stop listening for updates when no longer required
           return () => {
             university()
             courses()
             years()
             };
       }, []);

    

    return(
        <>
        <StatusBar backgroundColor="#304B65"/>
        <View style={{backgroundColor:'#8DACC9', flex:1}}>

            {
                props((style, item) => item ?
                (<ToastMessage
                  headTitle= "Successfully"
                  headTitleColor={{color: "#007A14" }}
                  subTitle= "Login successfully"
                  icon={<SuccessfullyLogo/>}
                  backGroundColor={{backgroundColor : "#DBF8E8"}}
                  style={style}
                />)
                
                : null)
            }
            <View style={{justifyContent:'center', alignItems:'center', paddingTop: 32}}>
                <ATiLogoMini width={40} height={40} />
            </View>
            <View style={{marginTop:'70%', marginLeft:16, marginRight:16}}>


{/* 
    University drop down
*/}

                <Text style={{...Font.baseStyle,...FontStyle.bold, color:'#FFFFFF'}}>UNIVERSITY</Text>
                <TouchableOpacity 
                    onPress={()=> setState(!hide)}
                >
                    <View style={ hide  ? {position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center'}:{position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center', borderWidth:2 , borderColor: '#253B51'}}>
                        <Text style={{...Font.baseStyle}}>{stateUni}</Text>
                        {
                            hide ?
                            <DropArrow style ={{ position: 'absolute', right: 24}}/> : <OppsiteDropArrow  style ={{ position: 'absolute', right: 24}}/>
                        }
                    </View>
                </TouchableOpacity>
                        <View style={{position:'relative'}}>
                            
                        { 
                            hide ?
                            null:
                            
                            <View style={{elevation:3, position: 'absolute', width:'100%',backgroundColor:'#FFFFFF', maxHeight:220, borderRadius:4, marginTop:2, zIndex:10}}>
                                <ScrollView>
                                {
                                    data.map((vl,ix) =>(
                                        <TouchableOpacity key={ix} style={{padding:16}} 
                                            onPress={()=>{
                                                setUni(vl)
                                                setState(true)
                                            }}
                                        >
                                            <Text>{vl}</Text>
                                            
                                        </TouchableOpacity>
                                    ))
                            } 
                                    
                                </ScrollView>
                            </View>
                        }
                        </View>
            </View>


{/* 
    Course dropdown 
*/}
            <View style={{marginLeft:16, marginRight:16, marginTop:8}}>

                <Text style={{...Font.baseStyle,...FontStyle.bold, color:'#FFFFFF'}}>COURSE</Text>
                <TouchableOpacity
                    onPress={()=> setStateCourse(!hideCosure)}
                >

                    <View style={hideCosure  ? {position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center'}:{position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center', borderWidth:2 , borderColor: '#253B51'}}>
                        <Text style={{...Font.baseStyle}}>{cousre}</Text>
                        {
                            hideCosure ?
                            <DropArrow style ={{ position: 'absolute', right: 24,}}/> : <OppsiteDropArrow  style ={{ position: 'absolute', right: 24}}/>
                        }
                    </View>
                </TouchableOpacity>
                    <View style={{position:'relative'}}>
                        { 
                            hideCosure ?
                            null:
                            
                            <View style={{ elevation:3, position: 'absolute',width:'100%', backgroundColor:'#FFFFFF', maxHeight:220, borderRadius:4, marginTop:2, zIndex:20}}>
                                <ScrollView>
                                    
                                {
                                        cs.map((vl,ix) =>(
                                            <TouchableOpacity key={ix} style={{padding:16}} 
                                                onPress={()=>{
                                                    setCourse(vl)
                                                    setStateCourse(true)
                                                }}
                                            >
                                                <Text>{vl}</Text>
                                                
                                            </TouchableOpacity>
                                        ))
                                }
        
                                </ScrollView>
                            </View>
                        }

                    </View>
            </View>




{/* 
    The Year dropdown 
*/}
            <View style={{ marginLeft:16, marginRight:16, marginTop:8}}>

                <Text style={{...Font.baseStyle,...FontStyle.bold, color:'#FFFFFF'}}>YEAR</Text>
                <TouchableOpacity 
                    onPress={()=> setStateYear(!hideYear)}
                >

                    <View style={hideYear  ? {position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center'}:{position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center', borderWidth:2 , borderColor: '#253B51'}}>
                        <Text style={{...Font.baseStyle}}>{year}</Text>
                        {
                            hideYear ?
                            <DropArrow style ={{ position: 'absolute', right: 24}}/> : <OppsiteDropArrow  style ={{ position: 'absolute', right: 24}}/>
                        }
                    </View>
                </TouchableOpacity>
                    <View style={{position: 'relative'}}>
                        { 
                            hideYear ?
                            null:
                            
                            <View style={{elevation:3,position:'absolute',width:'100%', backgroundColor:'#FFFFFF', maxHeight:160, borderRadius:4, marginTop:2, zIndex:20}}>
                                <ScrollView>
                                {
                                    ys.map((vl,ix) =>(
                                        <TouchableOpacity key={ix} style={{padding:16}} 
                                            onPress={()=>{
                                                setYear(vl)
                                                setStateYear(true)
                                            }}
                                        >
                                            <Text>{vl}</Text>
                                            
                                        </TouchableOpacity>
                                    ))
                            } 
                                    
                                </ScrollView>
                            </View>
                        }
                    </View>
            </View>
            <View style={{marginTop: 12, position:'relative', width: '100%'}}>
                <View style={{position:'absolute', right: 24}}>
            <Button
                title="SUBMIT"
                buttonStyle={{backgroundColor: '#253B51', padding: 12}}
                titleStyle={{...Font.baseStyle, ...FontStyle.bold}}
                onPress={()=>{
                    setRegister(true)
                    storeData("university@register", stateUni)
                    storeData("course@register", cousre)
                    storeData('year@register', year)
                }}
            />
                </View>
            </View>
        </View>
        </>
    
    )
}


