import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loadPropertyRequest } from '../../redux/actions';
import { test } from '../../redux/sagas';

class List extends Component {

	componentDidMount() {
		this.props.loadPropertyRequest();
	}

	splitter = (str) => {
		const array = str.split(",");
		array.shift()
		const string = array.join();
		return string;
	}

	render() {
		return (
			<FlatList data={test.data} renderItem={({ item, index }) => (
				<View style={styles.item} >
					<TouchableOpacity
						style={styles.item}
						onPress={() => this.props.navigate('Property', { item })}
					>
						<Image source={require('../../../../flat.png')} style={styles.image} />
						<View style={styles.flexColumn}>
							<View>
								<Text style={styles.price}>{item.attributes.default_price} AED/year </Text>
							</View>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<Text style={styles.apartment}>Apartment</Text>
								<Text style={{ paddingRight: 10 }}>
									<Icon name="bed" size={12} /> {item.attributes.bedroom_value}
								</Text>
								<Text>
									<Icon name="bath" size={12} /> {item.attributes.bathroom_value}
								</Text>
							</View>
							<View style={styles.flexColumn}>
								<Text style={styles.location}>
									{this.splitter(item.attributes.location_tree_path)}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			)}
				keyExtractor={(item, index) => index.toString()}
			/>
		);
	}
}

const styles = StyleSheet.create({
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

export default connect(state => state, { loadPropertyRequest })(List);

