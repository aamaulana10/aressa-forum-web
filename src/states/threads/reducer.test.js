/**
* test scenario for threadsReducer
*
* - threadReducers function
*  - should return the initial state when given by unknown action
*  - should return the threads when given by GET_ALL_THREADS action
*  - should return the threads with the new thread when given by CREATE_THREAD action
*
*/

import { describe } from "vitest";
import threadsReducer from "./reducer";
import { expect } from "vitest";
import { it } from "vitest";

describe('threadsReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'UNKNOWN',
        };
        // action
        const nextState = threadsReducer(initialState, action);
        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the threads when given by GET_ALL_THREADS action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'GET_ALL_THREADS',
            payload: {
                threads: [
                    {
                        id: 'thread-1',
                        title: 'Thread Pertama',
                        body: 'Ini adalah thread pertama',
                        category: 'General',
                        createdAt: '2021-06-21T07:00:00.000Z',
                        ownerId: 'users-1',
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 0            
                    }
                ]
            }
        }
        // action
        const nextState = threadsReducer(initialState, action);
        // assert
        expect(nextState).toEqual(action.payload.threads);
    })

    it('should return the threads with the new thread when given by CREATE_THREAD action', () => {
        // arrange
        const initialState = [
            {
                id: 'thread-1',
                title: 'Thread Pertama',
                body: 'Ini adalah thread pertama',
                category: 'General',
                createdAt: '2021-06-21T07:00:00.000Z',
                ownerId: 'users-1',
                upVotesBy: [],
                downVotesBy: [],
                totalComments: 0
            }
        ]
        const action = {
            type: 'CREATE_THREAD',
            payload: {
                thread: {
                    id: 'thread-2',
                    title: 'Thread Kedua',
                    body: 'Ini adalah thread kedua',
                    category: 'General',
                    createdAt: '2021-06-21T07:00:00.000Z',
                    ownerId: 'users-2',
                    upVotesBy: [],
                    downVotesBy: [],
                    totalComments: 0
                }
            }
        }
        // action
        const nextState = threadsReducer(initialState, action);
        // assert
        expect(nextState).toEqual([action.payload.thread,...initialState]);
    })
})