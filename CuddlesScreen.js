import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class CuddlesScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{fontSize: 120}}>🤗</Text>
            </View>
        )
    }
}
