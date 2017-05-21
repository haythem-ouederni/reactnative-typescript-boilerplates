/**
 */

'use strict';

import React from 'react';
import {Text, Button, View} from 'native-base';
import {homeStyles as styles} from './home.styles.ios';
import {HomeCommun, mapStateToProps, mapDispatchToProps} from './home-commun';
import { connect } from 'react-redux';

class Home extends HomeCommun {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            currentPage: 1,
            listMovies: {
                results: []
            }
        };
    }

    _retrieveMoviesList() {
        console.log(JSON.stringify(this.props));
        this.props.actions.retrieveMoviesList(this.props.type, this.state.currentPage)
			.then(() => {
                console.log(this.props['listMovies']);
			});
		// this.props.actions.retrieveMoviesList(this.props.type, this.state.currentPage)
		// 	.then(() => {
		// 		const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
		// 		const dataSource = ds.cloneWithRows(this.props.list.results);
		// 		this.setState({
		// 			list: this.props.list,
		// 			dataSource,
		// 			isLoading: false
		// 		});
		// 	});
		// if (isRefreshed && this.setState({ isRefreshing: false }));
	}

    render() {

        const { listMovies } = this.props.listMovies ;

        console.log('regreger');
        console.log(listMovies);

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to React Native !
                </Text>
                <Text style={styles.instructions}>
                    To get started yes, edit index.ios.js
                </Text>

                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload, {'\n'}
                    Shake or press menu button for dev menu sos
                </Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this._retrieveMoviesList}>
                        <Text>Fetch</Text>
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.pressBro}>
                        <Text>Press me</Text>
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button2} onPress={this.goToSimpleScreen}>
                        <Text>Go to simple screen</Text>
                    </Button>
                </View>

            </View>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
