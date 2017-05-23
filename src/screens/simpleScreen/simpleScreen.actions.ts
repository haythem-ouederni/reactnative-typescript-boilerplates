import * as types from '../../commun/constants/actions-types';


/**
 * Increment the number of clicks
 * @param aNbClicks 
 */
export function increment(aNbClicks: number) {
    return {
        type: types.INCREMENT_SIMPLE_SCREEN_NB_CLICKS,
        nbClicks: aNbClicks + 1
    };
}