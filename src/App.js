import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigations/Tab';
/*import StackNavigation from './navigations/Stack';*/


export default function App() {
    return (
        <NavigationContainer>
            <TabNavigation/>
        </NavigationContainer>
    );
};
/*const App = () => {
    return (
        <NavigationContainer>
            <TabNavigation />
           
        </NavigationContainer>
    )
}

export default App;

/* src/App.js */

