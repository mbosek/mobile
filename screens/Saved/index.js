import React from 'react';
import { FlatList, View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { saveProperty } from './redux/actions'

class Saved extends React.Component {
    static navigationOptions = {
        title: 'Saved',
        tabBarIcon: () => <Icon name="heart" size={24} />
    };

    splitter = (str) => {
		if (str !== undefined) {
			const array = str.split(",");
			array.shift()
			const string = array.join();
			return string;
		}
	}
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.view}>
               <Text style={styles.header}>Saved properties</Text>
                  <FlatList data={this.props.savedProperties.data} renderItem={({ item, index }) => (
                    <View style={styles.item} >
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => this.props.navigate('Property', { item })}
                        >
                            {/* <Image source={{uri: item.propertyImages[0].path}} style={styles.image} /> */}
                            <Image source={{uri: 'https://www.propertyfinder.ae/property/1525523518/500/356/MODE/2d452b/6129832-bd544o.jpg'}} style={styles.image} />
                            <View style={styles.flexColumn}>
                                <View>
                                    <Text style={styles.price}>{item.defaultPrice} AED </Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={styles.apartment}>Apartment</Text>
                                    <Text style={{ paddingRight: 10 }}>
                                        <Icon name="bed" size={12} /> {item.bedroomValue}
                                    </Text>
                                    <Text>
                                        <Icon name="bath" size={12} /> {item.bathroomValue}
                                    </Text>
                                </View>
                                <View style={styles.flexColumn}>
                                    <Text style={styles.location}>
                                        {this.splitter(item.locationTreePath)}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default connect(state => state)(Saved);

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 50,
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
	item: { flex: 1, flexDirection: 'row', backgroundColor: '#FFF', borderBottomColor: '#d9d9d9', borderBottomWidth: 1 },
	image: { width: 100, height: 80 },
	apartment: { fontWeight: 'bold', paddingRight: 10, paddingLeft: 5 },
	flexColumn: { flex: 1, flexDirection: 'column' },
	location: {
		color: '#4F4F4F',
		fontSize: 12,
		paddingLeft: 2
	},
	price: {
		padding: 5,
		paddingTop: 10,
		fontSize: 16,
		fontWeight: 'bold'
	},
});
