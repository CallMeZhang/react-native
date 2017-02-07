/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import RefreshControl from './src/page/RefreshControl'
export default class HelloWorld extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tittle:""
		};
	}
	componentDidMount() {
	}
  render() {
    return (
			<RefreshControl/>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});