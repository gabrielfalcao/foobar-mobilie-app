import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import React, { Component } from 'react';


class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{flex: 1,resizeMode: 'cover', width: 376}}/>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
    <ScrollView >
      <View style={{flex: 1, backgroundColor: '#fff0cc'}} />
      <View style={styles.header}>
        <Text style={{flex: 1,fontSize: 44, textAlign: "center", color: "#c80" }}>Got Bananas ?</Text>
      </View>
      <View style={styles.middle}>
       <Bananas />
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {flex: 2, backgroundColor: '#fff0cc'},
  middle: {
    flex: 3, backgroundColor: '#ffffee',alignItems: 'center', justifyContent: 'center'
  },
});
