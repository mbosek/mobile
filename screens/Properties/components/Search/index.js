import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, Button, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class Search extends Component {
	render() {
        const { navigate } = this.props.navigation;
		
		return (
			<View style={styles.wrapper}>
				<TextInput
					style={styles.input}
					placeholder="Near me"
					onChangeText={() => {}}
				/>
				<Button
					onPress={() => { navigate('Filters') }}
					title="Filters"
					color="#e20031"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		borderRadius: 6,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		width: 265,
		fontSize: 16,
		color: '#4f4f4f',
		backgroundColor: '#f1f1f1',
		marginRight: 15,
	},
	wrapper: { flexDirection: 'row', justifyContent: 'flex-start', marginTop: 50, marginBottom: 10, marginLeft: 7 }
});

export default withNavigation(Search);
