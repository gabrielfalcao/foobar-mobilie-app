import { StyleSheet, Alert, TouchableHighlight, Text, Image, View, ScrollView } from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#d3f7cf'
    },
});


export default class CameraView extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: '#d3f7cf'}} />
                <View style={styles.header}>
                    <Text style={{fontSize: 48, textAlign: "center", justifyContent: "center", color: "#eeeeec" }}>Take a Photo</Text>
                    <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="#3465a4">
                        <Text style={{fontSize: 128, textAlign: "center", justifyContent: "center", color: "#494" }}>📷</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 1, backgroundColor: '#d3d7cf'}} />
            </View>
        );
    }
}
