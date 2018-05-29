import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, Image, View } from 'react-native';
import { loadPropertyRequest } from './redux/actions'
import MapView, {Marker} from 'react-native-maps';
class Property extends Component {

    componentDidMount() {
        // const item = this.props.navigation.state.params.item
        // this.props.loadPropertyRequest(id);
    }

    render() {
        const item = this.props.navigation.state.params.item
        console.log(item)
        return (
            <View style={styles.view}>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.navigate('Properties')}
                />
                <Text>PROPERTY</Text>
                <Text>{item.attributes.name}</Text>
                <Image source={require('../../flat.png')} style={{ width: 400, height: 150 }} />
                <Text>{item.attributes.default_price}</Text>
                <Text>
                    {item.attributes.bathroom_value} baths
                </Text>
                <Text>
                    {item.attributes.bedroom_value} beds
                </Text>
                <Text>{item.attributes.location_tree_path}</Text>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 25.08967995,
                            longitude: 55.1526671,
                            minZoomLevel: 2,
                            maxZoomLevel: 2,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                     <Marker
                        coordinate={{latitude: 25.08967995,longitude: 55.1526671}}
                        title={item.attributes.name}
                        description={item.attributes.location_tree_path}
                    />
                    </MapView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop: 80
    },
    container: {
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default connect((state) => state, { loadPropertyRequest })(Property);
