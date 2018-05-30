import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, ScrollView, TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { loadPropertyRequest, saveProperty } from './redux/actions';
import Icon from 'react-native-vector-icons/FontAwesome';

class IconHeart extends PureComponent {
    render() {
        return (
            <Icon name="heart" color="#e20031" style={{ paddingRight: 15 }} size={20} onPress={() => {
                console.log(this.props)
                this.props.saveProperty(this.props.item)
            }} />
        );
    }
}
const IconHeartConnected = connect((state) => state, { saveProperty })(IconHeart);



class Property extends PureComponent {
    static navigationOptions = ({ navigation }) => {
        const { item } = navigation.state.params;
        return {
            headerLeft: <Button title="Back" onPress={() => navigation.navigate('Properties')} />,
            headerRight: <IconHeartConnected item={item} />,
        }
    }

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
                <Image source={{ uri: item.url }} style={{ width: 400, height: 250 }} />
            </View>
        );
    }

    onRegionChange = (region) => {
        this.setState({ region });
    }

    render() {
        const { item } = this.props.navigation.state.params;
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{ backgroundColor: '#FFF', flex: 1, flexDirection: 'column' }}>

                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={[
                        { url: "http://www.propertyfinder.ae/property/24ed1b41c10e40e21a21be0316052e6c/668/452/MODE/d95e3d/6120146-dfe4co.jpg" },
                        { url: "http://www.propertyfinder.ae/property/94f0dc1a159fa886f2bf1f53cc3d5e11/668/452/MODE/cb4d7c/6120146-75b96o.jpg" }]}
                    renderItem={this._renderItem}
                    sliderWidth={400}
                    itemWidth={400}
                />

                <View style={{ paddingLeft: 15, paddingTop: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 5 }}>{item.defaultPrice} AED/year</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, paddingBottom: 5 }}>Apartment, {item.bedroomValue} beds, {item.bathroomValue} baths</Text>
                    <Text style={{ fontSize: 12, color: '#3d3d3d', paddingBottom: 5 }}>{item.locationTreePath}</Text>
                </View>
                <View style={{ padding: 10, borderTopColor: '#ededed', borderBottomColor: '#ededed', borderBottomWidth: 1, borderTopWidth: 1, marginBottom: 10, marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigate('Map', {
                        coordinate: {
                            latitude: this.state.region.latitude, longitude: this.state.region.longitude
                        },
                        region: this.state.region,
                        item: item
                    })}>
                        <Text style={{ fontSize: 17, color: "#e20031" }}><Icon name="map-marker" size={20} /> View on map</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 15, paddingTop: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 5 }}>Facts</Text>
                    <View style={styles.list} >
                        <Text style={{ fontSize: 14, width: 150 }}>Price</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 5 }}>{item.defaultPrice}</Text>
                    </View>
                    <View style={styles.list} >
                        <Text style={{ fontSize: 14, width: 150 }}>Type</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 5 }}>Apartment</Text>
                    </View>
                    <View style={styles.list} >
                        <Text style={{ fontSize: 14, width: 150 }}>Reference</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 5 }}>{item.reference}</Text>
                    </View>
                    <View style={styles.list} >
                        <Text style={{ fontSize: 14, width: 150 }}>RERA Permit No.</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 5 }}>{item.rera ? item.rera : 'None'}</Text>
                    </View>
                    <View style={styles.list} >
                        <Text style={{ fontSize: 14, width: 150 }}>Bedrooms</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 5 }}>{item.bedroomValue}</Text>
                    </View>
                    <View style={styles.list} >
                        <Text style={{ fontSize: 14, width: 150 }}>Bathrooms</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 5 }}>{item.bathroomValue}</Text>
                    </View>
                    <View style={styles.list} >
                        <Text style={{ fontSize: 14, width: 150 }}>Area</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 5 }}>{item.area}</Text>
                    </View>
                </View>
                <View style={{ paddingLeft: 15, paddingTop: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 5 }}>Property description</Text>
                    <Text>{item.agent.biography}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    list: { paddingTop: 5, paddingBottom: 5, flex: 1, flexDirection: 'row', borderBottomColor: '#ededed', borderBottomWidth: 1 },
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


export default connect((state) => state, { loadPropertyRequest, saveProperty })(Property);
