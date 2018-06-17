import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

const kiss_types = [
    '💋',
    '😘',
    '😗',
    '😚',
]
export default class KissesScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{fontSize: 120}}>{kiss_types[0]}</Text>
            </View>
        );
    }
}
