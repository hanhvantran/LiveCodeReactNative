import React, { Component } from 'react';
import { View } from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _goToAuthentication() {
    const { navigator } = this.props;
    navigator.push({ name: 'Authentication' });
  }
  _goToOrderHistory() {
    const { navigator } = this.props;
    navigator.push({ name: 'OrderHistory' });
  }
  _goToChangedInfo() {
    const { navigator } = this.props;
    navigator.push({ name: 'ChangedInfo' });
  }
  closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };
  render() {
    const { navigator } = this.props;
    return (
      <View style={{ backgroundColor: 'orange', flex: 1 }}>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          tapToClose
          openDrawerOffset={0.5}
          content={<Menu navigator={navigator} />}
        >
          <Shop open={this.openControlPanel.bind(this)} />
        </Drawer>
      </View>
    );
  }
}
