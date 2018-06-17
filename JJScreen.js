import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const redHeart = ' 💖'

export default class JJScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
                    <Text style={{fontSize: 60, fontWeight: 'bold', color: '#EF2929'}}>{redHeart}</Text>
                    <Text style={{fontSize: 30, marginTop: 20, fontWeight: 'bold', color: '#E23488'}}>What would you like today ?</Text>
                </View>
                <Button
                    title="Cuddles"
                    onPress={() => this.props.navigation.navigate('Cuddles')}
                    buttonStyle={{
                        backgroundColor: "#E23488",
                        width: 300,
                        height: 90,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5,
                        marginTop: 20
                    }}
                />
                <Button
                    title="Kisses"
                    onPress={() => this.props.navigation.navigate('Kisses')}
                    buttonStyle={{
                        backgroundColor: "#E23488",
                        width: 300,
                        height: 90,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5,
                        marginTop: 20
                    }}
                />
            </View>
        );
    }
}
