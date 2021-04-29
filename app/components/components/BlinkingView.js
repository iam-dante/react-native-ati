import React from 'react'
import {View} from 'react-native'
import {animated, useSpring} from 'react-spring/native'


export default function BlinkingView(){
    const AnimatedView = animated(View)
    const props = useSpring({
        loop: true,
        to:{opacity: 1 },
        from:{opacity: 0},
        reset: true,
        delay: 200
    })

    return (
        <AnimatedView style={{height:10, width:10, backgroundColor:'red', borderRadius:5, marginHorizontal:2, ...props}} />
    )
}