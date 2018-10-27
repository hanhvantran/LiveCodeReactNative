import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _goBackToMain()
  {
       const { navigator } = this.props;
       navigator.pop();
  }
  render() {
    return (
      <View style={{ backgroundColor: 'orange', flex: 1 }}>
        <Text> Authentication </Text>
        <TouchableOpacity onPress={ this._goBackToMain.bind(this)}>
          <Text>Go back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
