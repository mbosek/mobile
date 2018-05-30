import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, Image, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { loadPropertyRequest } from './redux/actions';

class Property extends PureComponent {
    static getDerivedStateFromProps(props, state) {
        const { item } = props.navigation.state.params;
        const lastLocation = item.locationTree[item.locationTree.length - 1];
        const region = {
            latitude: lastLocation.coordinates.lat,
            longitude: lastLocation.coordinates.lon,
            minZoomLevel: 5,
            maxZoomLevel: 5,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        return {
            region: region,
        };
    }


    constructor() {
        super();
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                minZoomLevel: 5,
                maxZoomLevel: 5,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={styles.slide}>
                <Image source={require('../../flat.png')} style={{ width: 400, height: 150 }} />
            </View>
        );
    }

    onRegionChange = (region) => {
        this.setState({ region });
    }

    render() {
        const { item } = this.props.navigation.state.params;
        return (
            <View style={styles.view}>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Text>PROPERTY</Text>
                <Text>{item.name}</Text>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={[{ item: 'test1' }, { item: 'test2' }]}
                    renderItem={this._renderItem}
                    sliderWidth={400}
                    itemWidth={400}
                />
                <Text>{item.defaultPrice}</Text>
                <Text>
                    {item.bathroomValue} baths
                </Text>
                <Text>
                    {item.bedroomValue} beds
                </Text>
                <Text>{item.locationTreePath}</Text>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        region={this.state.region}
                    >
                        <Marker
                            coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
                            title={item.name}
                            description={item.locationTreePath}
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
