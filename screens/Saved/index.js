import React from 'react';
import { View, TouchableHighlight, Text, Image, StyleSheet } from 'react-native';
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
    render() {
        console.log(this.props.savedProperties.data)
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.view}>
               <Text>Saved properties</Text>
               {/* {this.props.savedProperties.data.map(property => {
                   console.log(property)
               })} */}
            </View>
        );
    }
}

export default connect(state => state)(Saved);

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