//import liraries
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Authentication from './Authentication/Authentication';
import Main from './Main/Main';
import ChangedInfo from './ChangedInfo/ChangedInfo';
import OrderHistory from './OrderHistory/OrderHistory';

StatusBar.setHidden(true);
// create a component
export default class App extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator

                initialRoute={{ name: 'Main' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'Main': return <Main navigator={navigator} />
                        case 'Authentication': return <Authentication navigator={navigator} />
                        case 'ChangedInfo': return <ChangedInfo navigator={navigator} />
                        default: return <OrderHistory navigator={navigator} />
                    }
                }}
                configureScene={
                    route => {
                        if (route.name === 'ChangedInfo')
                        {
                            return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;
                        }
                        else if (route.name === 'Authentication')
                        {
                            return NavigationExperimental.Navigator.SceneConfigs.FloatFromLeft;
                        }
                        else
                        {
                            return NavigationExperimental.Navigator.SceneConfigs.FloatFromLeft;
                        }

                    }
                }
            />
        );
    }
}
