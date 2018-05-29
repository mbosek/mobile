import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, Image, View } from 'react-native';
import { loadPropertyRequest } from './redux/actions'

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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop: 80
    }
});

export default connect((state) => state, { loadPropertyRequest })(Property);
