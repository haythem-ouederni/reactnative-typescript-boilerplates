/**
 */

'use strict';

import {Component} from 'react';
import {Navigator} from 'react-native-navigation';
import {Alert} from 'react-native';
import * as homeActions from './home.actions';
import {bindActionCreators} from 'redux';

interface Props {
    navigator?: Navigator,
    actions?: any,
    listMovies?: any
}

interface State {
    currentPage?: number,
    isLoading?: boolean,
    type?: string,
    listMovies : any
}

export class HomeCommun extends Component < Props, State > {

    constructor(props) {
        super(props);

        // this.onNavigatorEvent will be our handler
        this
            .props
            .navigator
            .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        this.state = {
            isLoading: true,
            currentPage: 1,
            listMovies: {
                results: []
            },
            type: 'popular'
        };

        // we bind some methods to the context
        this.retrieveMoviesList = this
            .retrieveMoviesList
            .bind(this);
        this.goToSimpleScreen = this
            .goToSimpleScreen
            .bind(this);

    }

    // method handling the navigation events
    onNavigatorEvent(event) {
        if (event.id === 'willAppear') {
            // we make sure that the tabs are displayed when entering the screen because of
            // a bug on android we hide the tabs before displaying them
            this
                .props
                .navigator
                .toggleTabs({
                    to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                    animated: false // does the toggle have transition animation or does it happen immediately (optional)
                });
            this
                .props
                .navigator
                .toggleTabs({
                    to: 'shown', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                    animated: false // does the toggle have transition animation or does it happen immediately (optional)
                });
        }
    }

    retrieveMoviesList() {


        this
            .props
            .actions
            .retrieveMoviesList(this.state.type, this.state.currentPage)
            .then(() => {
                // console.log(this.props.listMovies);
            });
        // this.props.actions.retrieveMoviesList(this.props.type,
        // this.state.currentPage) 	.then(() => { 		const ds = new ListView.DataSource({
        // rowHasChanged: (row1, row2) => row1 !== row2 }); 		const dataSource =
        // ds.cloneWithRows(this.props.list.results); 		this.setState({ 			list:
        // this.props.list, 			dataSource, 			isLoading: false 		}); 	}); if
        // (isRefreshed && this.setState({ isRefreshing: false }));
    }

    goToSimpleScreen() {
        // go to the new screen
        this
            .props
            .navigator
            .push({screen: 'screens.simpleScreen', title: 'Simple screen'});
    }

    pressBro() {
        Alert.alert('i am pressed');
    }

    movies() {
        if(this.props.listMovies){
        return Object
            .keys(this.props.listMovies)
            .map(key => {
                // console.log(this.props.listMovies[key]);
                return this.props.listMovies[key];
            })
        }else {
            return [];
        }
    }

}

export function mapStateToProps(state : any, _ownProps : any) {
    return {listMovies: state.retrieveListMovies.listMovies};
}

export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(homeActions), dispatch)
    };
}