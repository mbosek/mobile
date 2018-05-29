import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

class SearchType extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<TouchableOpacity onPress={() => { }}>
					<View style={{
						borderTopLeftRadius: 5,
						borderBottomLeftRadius: 5,
						overflow: "hidden",
					}}>
						<Text style={styles.button}>Rent</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { }}>
					<View style={{
						borderTopRightRadius: 5,
						borderBottomRightRadius: 5,
						overflow: "hidden",
					}}>
						<Text style={styles.inactive}>Buy</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inactive: {
		borderWidth: 1,
		borderColor: '#e20031',
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 75,
		paddingRight: 75,
		fontSize: 16,
		color: '#e20031',
		backgroundColor: 'white'
	},
	button: {
		borderWidth: 1,
		borderColor: '#e20031',
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 75,
		paddingRight: 75,
		fontSize: 16,
		color: '#FFF',
		backgroundColor: '#e20031'
	},
	wrapper: { flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 15 },
});

export default SearchType;

