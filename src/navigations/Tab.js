
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Calendar } from '../screens/Calendar';
import { Timer } from '../screens/Timer';
import  Todo  from '../screens/Todo';
import { Settings } from '../screens/Settings';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();



const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: props => {
                    let name = '';
                    if (route.name === 'Calendar') name = 'calendar';
                    else if (route.name === 'Timer') name = 'timer';
                    else if (route.name === 'Todo') name = 'todo';
                    else if (route.name === 'Settings') name = 'settings';
                    
                    else name = 'home';
                    return TabIcon({...props, name});
                },
                tabBarStyle: {
                    backgroundColor: '#d4e6ff',
                    borderTopColor: '#d4e6ff',
                    borderTopWidth: 1,
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#778bdd',
            })}
            >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'home' : 'home-outline',
            }),
        }}
        
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerShown:false,
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'calendar' : 'calendar-outline',
            }),
        }}
      />
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'timer' : 'timer-outline',
            }),
        }}
      />
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{
          headerShown:false,
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'check' : 'check-outline',
            }),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'cog' : 'cog-outline',
            }),
        }}
      />
    </Tab.Navigator>
  );
};




export default TabNavigation;

/* src/navigations/Tab.js */