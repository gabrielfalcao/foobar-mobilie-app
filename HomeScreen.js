import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <View style={{height: 20}}/>
                <Button
                    title="JJ 💖"
                    icon={<Icon name='list-alt' size={15} color='white' />}
                    onPress={() => this.props.navigation.navigate('JJAdmin')}
                    buttonStyle={{
                        backgroundColor: "#555753",
                        width: 300,
                        height: 90,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                />
                <View style={{height: 20}}/>
                <Button
                    icon={<Icon name='camera' size={15} color='white' />}
                    title='Camera'
                    onPress={() => this.props.navigation.navigate('Camera')}
                    buttonStyle={{
                        backgroundColor: "rgba(114, 159, 207, 1)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                />
                <View style={{height: 20}}/>
                <Button
                    title="Todo List"
                    icon={<Icon name='list-alt' size={15} color='white' />}
                    onPress={() => this.props.navigation.navigate('TodoList')}
                    buttonStyle={{
                        backgroundColor: "rgba(252, 175, 62, 1)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                />
            </View>
        );
    }
}
