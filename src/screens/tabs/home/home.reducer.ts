import { MovieData } from '../../../data/movies/movie';
import createReducer from '../../../commun/reducers/create-reducers';
import * as types from '../../../commun/constants/actions-types';
import initialSate from '../../../commun/reducers/initial-state';

/**
 * This method extracts the list of movies.
 */
export const retrieveListMovies = createReducer(initialSate.home, {
    [types.RETRIEVE_MOVIES_LIST_SUCCESS](state : any, action : any) {
        // console.log(JSON.stringify( action.listMovies));

        let newState = {
            ...state,
            listMovies: {}
        };
        action
            .listMovies
            .results
            .forEach((movie) => {
                var lLocalMovieData = new MovieData();
                lLocalMovieData.convertMovieFromApi(movie);
                newState.listMovies[movie.id] = Object.assign({}, lLocalMovieData);
            });
        return newState;
    }
});