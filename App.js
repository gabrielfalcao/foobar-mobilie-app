import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import CameraScreen from './CameraScreen';
import TodoListScreen from './TodoListScreen';
import JJScreen from './JJScreen';
import CuddlesScreen from './CuddlesScreen';
import KissesScreen from './KissesScreen';



const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Camera: {
        screen: CameraScreen,
    },
    TodoList: {
        screen: TodoListScreen,
    },
    JJAdmin: {
        screen: JJScreen,
    },
    Cuddles: {
        screen: CuddlesScreen,
    },
    Kisses: {
        screen: KissesScreen,
    },
},
{
   initialRouteName: 'Home',
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
