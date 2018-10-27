//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class Menu extends Component {
    goToAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'Authentication' });
    }
    goToOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'OrderHistory' });
    }
    goToChangedInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'ChangedInfo' });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Menu</Text>
                <TouchableOpacity onPress={this.goToAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangedInfo.bind(this)}>
                    <Text>Go to Changed Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToOrderHistory.bind(this)}>
                    <Text>Go to Cart History</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
export default Menu;
//make this component available to the app

