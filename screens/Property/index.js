import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Image, View } from 'react-native';
import { loadPropertyRequest } from './redux/actions'

class Property extends Component {

    componentDidMount() {
        const id = this.props.navigation.state.params.id
        this.props.loadPropertyRequest(id);
    }

    render() {
        return (
            <View style={styles.view}>
              
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
});

export default connect((state) => state, { loadPropertyRequest })(Property);
