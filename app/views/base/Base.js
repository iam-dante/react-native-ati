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
import { ArchiveIcon, CalendarIcon, HeartIcon } from '../../components/vectors/icons'
import { colors } from '../../internals/theme'

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
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={Name.FOR_YOU}
                activeColor="#f0edf6"
                inactiveColor="#eee"
                style={{ backgroundColor: 'tomato' }}
                barStyle={{ backgroundColor: colors.primary.dark }}>
                <Tab.Screen 
                    name={Name.FOR_YOU} 
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'For You',
                        tabBarIcon: ({ color }) => (
                            <HeartIcon color={color} width={26} height={26} />
                        )
                    }} />
                <Tab.Screen 
                    name={Name.SCHEDULE} 
                    component={ScheduleScreen}
                    options={{
                        tabBarLabel: 'Schedule',
                        tabBarIcon: ({ color }) => (
                            <CalendarIcon color={color} width={26} height={26} />
                        )
                    }} />
                <Tab.Screen 
                    name={Name.FILES} 
                    component={FilesScreen}
                    options={{
                        tabBarLabel: 'Files',
                        tabBarIcon: ({ color }) => (
                            <ArchiveIcon color={color} width={26} height={26} />
                        )
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default Base
