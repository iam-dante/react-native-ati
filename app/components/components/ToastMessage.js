import {animated } from 'react-spring/native'
import {View, Text} from 'react-native'
import React  from 'react'
import {FontStyle} from '../../internals/theme/fonts'


export default function ToastMessage({headTitle, subTitle, icon, style, backGroundColor, headTitleColor}){
    const AnimatedView = animated(View)
    
      return(

        <AnimatedView style={{height:90, zIndex:999,  width:'100%', paddingHorizontal:12,paddingBottom:12, position:'absolute', ...style, }}>
            <View style={{width:'100%', height:'100%', borderRadius:5, flexDirection:'row', alignItems:'center', paddingHorizontal:20, elevation:2, ...backGroundColor}}>
                {icon}
                <View style={{paddingHorizontal:16, paddingVertical :12,}}>
                <Text style={{fontSize:20, ...headTitleColor, ...FontStyle.bold}}>{headTitle}</Text>
                <Text style={{color:'#7B7272', ...FontStyle.regular}}>{subTitle}</Text>
                </View>
            </View>
        </AnimatedView>

      )
  }
