import React, { useState, useRef, useEffect, useContext } from 'react'
import { View,Text,TouchableOpacity,ScrollView,StatusBar,} from 'react-native'
import {ATiLogoMini } from '../../../components/vectors/logo'
import { Font, FontStyle } from '../../../internals/theme/fonts'
import { Button } from 'react-native-elements'
import {DropArrow, OppsiteDropArrow} from '../../../components/vectors/icons'
import { AuthContext } from '../FirebaseConfig'




export default function FillScreen(){
    const [hide, setState] = useState(true)
    const [stateUni, setUni] = useState("University of Dar es salaam")

    const [hideCosure, setStateCourse] = useState(true)
    const [cousre, setCourse] = useState("Bachelor in Computer Science")

    const [hideYear, setStateYear] = useState(true)
    const [year, setYear] = useState('First')


    const {setRegister} = useContext(AuthContext)






    return(
        <>
        <StatusBar backgroundColor="#304B65"/>
        <View style={{backgroundColor:'#8DACC9', flex:1}}>
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
                            
                            <View style={{ position: 'absolute', width:'100%',backgroundColor:'#FFFFFF', maxHeight:220, borderRadius:4, marginTop:2, zIndex:10}}>
                                <ScrollView>
                                    
                                    <TouchableOpacity style={{padding:16}} 
                                        onPress={()=>{
                                            setUni('Institute of Finance and Management')
                                            setState(true)
                                        }}
                                    >
                                        <Text>
                                        Institute of Finance and Management
                                        </Text>
                                        
                                    </TouchableOpacity>
                                    
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
                onBlur={()=>setState()}
                    onPress={()=> setStateCourse(!hideCosure)}
                >

                <View style={ hideCosure  ? {position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center'}:{position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center', borderWidth:2 , borderColor: '#253B51'}}>
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
                            
                            <View style={{ position: 'absolute',width:'100%', backgroundColor:'#FFFFFF', maxHeight:220, borderRadius:4, marginTop:2, zIndex:20}}>
                                <ScrollView>
                                    <TouchableOpacity style={{padding:16}} 
                                        onPress={()=>{
                                            setCourse('Bachelor in Computer Science')
                                            setStateCourse(true)
                                        }}
                                    >
                                        <Text>
                                            Bachelor in Computer Science
                                        </Text>
                                        
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{padding:16}} 
                                        onPress={()=>{
                                            setCourse('Bachelor in Telecommication')
                                            setStateCourse(true)
                                        }}
                                    >
                                        <Text>
                                            Bachelor in Telecommication 
                                        </Text>
                                        
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{padding:16}} 
                                        onPress={()=>{
                                            setCourse('Bachelor in Computer Engeering')
                                            setStateCourse(true)
                                        }}
                                    >
                                        <Text>
                                            Bachelor in Engeering 
                                        </Text>
                                        
                                    </TouchableOpacity>
                                    
        
                                    
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

                    <View style={ hideYear  ? {position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center'}:{position:'relative',width:'100%', height:52, backgroundColor:'white', padding:12, borderRadius:6, justifyContent:'center', borderWidth:2 , borderColor: '#253B51'}}>
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
                            
                            <View style={{position:'absolute',width:'100%', backgroundColor:'#FFFFFF', maxHeight:220, borderRadius:4, marginTop:2, zIndex:20}}>
                                <ScrollView>
                                    <TouchableOpacity style={{padding:16}} 
                                        onPress={()=>{
                                            setYear('First')
                                            setStateYear(true)
                                        }}
                                    >
                                        <Text>
                                            First
                                        </Text>
                                        
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{padding:16}} 
                                        onPress={()=>{
                                            setYear('Second')
                                            setStateYear(true)
                                        }}
                                    >
                                        <Text>
                                            Second
                                        </Text>
                                        
                                    </TouchableOpacity>
                                    
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
                onPress={()=> setRegister(true)}
            />
                </View>
            </View>
        </View>
        </>
    
    )
}

 
