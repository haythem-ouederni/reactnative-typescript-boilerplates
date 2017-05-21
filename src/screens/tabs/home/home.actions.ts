import axios from 'axios';
import * as types from '../../../commun/constants/actions-types';
import { TMDB_URL, TMDB_API_KEY } from '../../../commun/constants/api-constants';


// MOVIES LIST
export function retrieveMoviesListSuccess(res) {
    return {
        type: types.RETRIEVE_MOVIES_LIST_SUCCESS,
        list: res.data
    };
}

export function retrieveMoviesList(type, page) {
    return function(dispatch) {
        return axios.get(`${TMDB_URL}/movie/${type}?api_key=${TMDB_API_KEY}&page=${page}`)
            .then(res => {
                dispatch(retrieveMoviesListSuccess(res));
            })
            .catch(error => {
                console.log('Movies List', error);
            });
    };
}