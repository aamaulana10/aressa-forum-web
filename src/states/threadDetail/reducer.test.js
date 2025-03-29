/*
* test scenario for threadDetailReducer
*
* should return the initial state when given unknown action
* should handle GET_THREAD_DETAIL action correctly
*/

import { it, describe, expect } from 'vitest';
import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
    it('should return the initial state when given unknown action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'UNKNOWN',
        };
        // action
        const nextState = threadDetailReducer(initialState, action);
        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should handle GET_THREAD_DETAIL action correctly', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'GET_THREAD_DETAIL',
            payload: {
                threadDetail: {
                    id: 'thread-1',
                    title: 'Thread Pertama',
                    body: 'Ini adalah thread pertama',
                    category: 'General',
                    createdAt: '2021-06-21T07:00:00.000Z',
                    ownerId: 'users-1',
                    upVotesBy: [],
                    downVotesBy: [],
                    totalComments: 0,
                    comments: [],
                }
            }
        };
        // action
        const nextState = threadDetailReducer(initialState, action);
        console.log('nextState', nextState);

        // assert
        expect(nextState).toEqual(action.payload.threadDetail);
    });

});
