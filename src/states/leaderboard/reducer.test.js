/**
 * test scenario for leaderboardReducer
 *
 * - leaderboardReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the leaderboard when given by GET_LEADERBOARD action
 *
 */

import { describe } from "vitest";
import leaderboardReducer from "./reducer";
import { expect, it } from "vitest";

describe('leaderboardReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'UNKNOWN',
        };
        // action
        const nextState = leaderboardReducer(initialState, action);
        // assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the leaderboard when given by GET_LEADERBOARD action', () => {
        // arrange
        const initialState = [];
        const action = {
            type: 'GET_LEADERBOARD',
            payload: {
                leaderboard: [
                    {
                        user: {
                            id: 'user-1',
                            name: 'User 1',
                            email: 'user1@mail.com',
                            avatar: 'https://generated-image-url.jpg'
                        },
                        score: 100
                    }
                ]
            }
        }
        // action
        const nextState = leaderboardReducer(initialState, action);
        // assert
        expect(nextState).toEqual(action.payload.leaderboard);
    })
})