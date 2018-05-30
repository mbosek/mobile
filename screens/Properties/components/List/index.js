import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loadPropertyRequest } from '../../redux/actions';
import { test } from '../../redux/sagas';
// import PushNotification from 'react-native-push-notification';
// import { pushNotifications } from '../../../../services/pushNotifications';

class List extends PureComponent {

	componentDidMount() {
		const filters = 'af=500&am[]=MR&bf=0&filter[categoryId]=1&l=50&ob=mr&page=1&page[limit]=11&include=agent,locationTree,propertyImages';
		this.props.loadPropertyRequest(filters);

		// pushNotifications.localNotification();
	}

	splitter = (str) => {
		if (str !== undefined) {
			const array = str.split(",");
			array.shift()
			const string = array.join();
			return string;
		}
	}

	render() {
		// console.log(this.props.properties.data)
		return (
			<FlatList data={this.props.properties.data} renderItem={({ item, index }) => (
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
		);
	}

	componentWillUnmount(){
		
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

