import React, { Component } from 'react';
import { View, Button, TouchableHighlight, Text, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import MapView, { Marker } from 'react-native-maps';

class MapScreen extends Component {
    static navigationOptions = {
        title: 'Map',
    };
    render() {
        const { coordinate, item, region } = this.props.navigation.state.params;
        
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={region}
                >
                    <Marker
                        coordinate={coordinate}
                        title={item.name}
                        description={item.locationTreePath}
                    />
                </MapView>
            </View>
        );
    }
}

export default MapScreen

const styles = StyleSheet.create({

    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});