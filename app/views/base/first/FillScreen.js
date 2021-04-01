import React, { useState } from 'react'
import { View } from 'react-native'
import {ATiLogoMini } from '../../../components/vectors/logo'
import DropDownPicker from 'react-native-dropdown-picker'
import MainContainer from '../../../components/containers/Container/MainContainer'
import { StatusBar } from 'react-native'


export default function FillScreen(){
    const [itemSelected, setItemSelected] = useState('fr')
    
    return(
        <>
        <StatusBar backgroundColor="#304B65"/>
        <View style={{flex:1, backgroundColor:'#8DACC9'}}>
            <View style={{justifyContent:'center', alignItems:'center', paddingTop:50,}}>
                <ATiLogoMini style={{width:40, height:40}}/>
            </View>
            <View style={{marginTop:150,width:'100%',height:'100%', alignItems:'center'}}>
            <DropDownPicker
                    items={[
                        {label: 'France', value: 'fr'},
                        {label: 'Spain', value: 'es' },

                    ]}
                    defaultValue={itemSelected}
                    placeholder="Select your country"
                    // onChangeList={}
                    onChangeItem={item => {
                        setItemSelected(item)
                    }}
                    multiple={false}
                    // style={{width:'80%'}}
                    containerStyle={{width:'90%', height:40, color:'lightblue'}}
                /> 
            </View>
         </View>
        </>
    )
}
