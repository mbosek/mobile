import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import List from './components/List';
import Search from './components/Search';
import SearchType from './components/SearchType';

class Properties extends Component {
  static navigationOptions = {
    title: 'Properties',
    tabBarIcon: () => <Icon name="home" size={24} />,
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.flexColumn}>
        <Search />
        <SearchType />
        <List navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexColumn: { flex: 1, flexDirection: 'column', backgroundColor: '#FFF' },
});

export default connect(state => state, {})(Properties);
