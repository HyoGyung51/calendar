/*
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const WholeStack = () => {
    return (
        <Stack.Navigator initialRouteName='TabNavigation'>
            <Stack.Screen
                name='TabNavigation'
                component={Tab}
                options={{headerShown: false, animationEnabled:false}}
            />
            <Stack.Screen
                name='Main'
                component={Main}
                options={{headerShown:false, animationEnable:false}}
            />    
        </Stack.Navigator>
    );
};

export default()=> {
    return(
        <NavigationContainer>
            <WholeStack/>
        </NavigationContainer>
    );
};

*/