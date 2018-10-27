import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangedInfo extends Component {
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
      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <Text> ChangedInfo </Text>
        <TouchableOpacity onPress={ this._goBackToMain.bind(this)}>
          <Text>Go back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
