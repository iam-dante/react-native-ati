import React from 'react'
import AboutScreen from './AboutScreen'
import MainScreen from './MainScreen'
import UniversityScreen from './UniversityScreen'
import SubjectScreen from './SubjectScreen'


import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import DrawerContent from './DrawerContent'
import { Font, FontStyle } from '../../internals/theme/fonts'

const Drawer = createDrawerNavigator();


export default () =>{
    return (
    <NavigationContainer>
        <Drawer.Navigator 
        initialRouteName='Home' 
        drawerPosition='right'
        backBehavior='firstRoute'
        // drawerType='slide'
        drawerStyle={{
            backgroundColor: '#142C44',
            flex: 1,
        }}
        drawerContent = {props => <DrawerContent {...props}/>}
        drawerContentOptions = {{
            activeBackgroundColor: '#8DACC9',
            activeTintColor: '#000',
            inactiveTintColor: '#FFF',
            style: {flex: 1},
            itemStyle: { width:'100%', borderTopLeftRadius:100, borderBottomLeftRadius:100, paddingLeft:16,},
            labelStyle: {
                ...FontStyle.bold
                
            },
        }}
        gestureEnabled
        lazy>
            
            <Drawer.Screen name="Home" component={MainScreen} />
            <Drawer.Screen name="University Exams" component={UniversityScreen} />
            <Drawer.Screen name="My Subjects" component={SubjectScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    </NavigationContainer> 
    );
}
