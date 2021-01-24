/**
 * This screen would posses the 
 * overra application screen.
 * 
 * This screen would be bound with the react-navigation
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// Screens
import ScheduleScreen from './ScheduleScreen'
import HomeScreen from './HomeScreen'
import FilesScreen from './FilesScreen'

// Icons
import { ArchiveIcon, CalendarIcon, HeartIcon } from '../../../components/vectors/icons'
import { colors } from '../../../internals/theme'

const Tab = createMaterialBottomTabNavigator()

const Name = {
    FOR_YOU: "ForYou",
    SCHEDULE: "Schedule",
    FILES: "Files"
}
/**
 * The main app screen
 */
function Base () {
    return (
        
            <Tab.Navigator
                initialRouteName={Name.FILES}
                activeColor="#ffffff"
                inactiveColor="#97A5B2"
                barStyle={{ backgroundColor: colors.primary.dark }}
                backBehavior={'none'}
                shifting
                >
                <Tab.Screen 
                    name={Name.FOR_YOU} 
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'For You',
                        tabBarColor: '#304B65',
                        tabBarIcon: ({ color }) => (
                            <HeartIcon color={color} width={26} height={26} />
                        )
                    }} />
                <Tab.Screen 
                    name={Name.SCHEDULE} 
                    component={ScheduleScreen}
                    options={{
                        tabBarLabel: 'Schedule',
                        tabBarColor: '#004d40',
                        tabBarIcon: ({ color }) => (
                            <CalendarIcon color={color} width={26} height={26} />
                        )
                    }} />
                <Tab.Screen 
                    name={Name.FILES} 
                    component={FilesScreen}
                    options={{
                        tabBarLabel: 'Files',
                        tabBarColor: '#006064',
                        tabBarIcon: ({ color }) => (
                            <ArchiveIcon color={color} width={26} height={26} />
                        )
                    }} />
            </Tab.Navigator>
        
    )
}


export default Base
