import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {
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
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <Text> OrderHistory </Text>
        <TouchableOpacity onPress={ this._goBackToMain.bind(this)}>
          <Text>Go back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
