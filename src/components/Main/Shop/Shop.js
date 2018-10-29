import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Platform } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get('window');
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'orange' }}>
                <View style={{ height: height / 8 }}>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Text>Open Menu</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
                            Login with Facebook </Icon.Button>
                        <Icon.Button name="md-menu" backgroundColor="#3b5998">
                            <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Login with Facebook</Text>
                        </Icon.Button>
                    </View>

                </View>
                <TabNavigator
                    sceneStyle={{ paddingBottom: 0 }} >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
export default Shop;
