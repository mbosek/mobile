import React from 'react';
import { View, Button, TouchableHighlight, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import { withNavigation } from 'react-navigation';

class Filters extends React.Component {
    static navigationOptions = {
        title: 'Filters',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.view}>
            <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />
              <Text>FILTERSSSS</Text>
            </View>
        );
    }
}

export default withNavigation(Filters)

const styles = StyleSheet.create({
    button: {
        paddingTop: 25,
        paddingRight: 60,
        paddingBottom: 25,
        paddingLeft: 60,
        marginTop: 15,
        marginRight: 30,
        marginBottom: 15,
        marginLeft: 30,
        borderWidth: 3,
        textAlign: 'center',
        color: '#FFF',
        borderColor: '#FFF',
        backgroundColor: '#4593e3',
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    }
});