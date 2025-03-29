/**
 * test scenario for leaderboard action
 *
 * - asyncGetLeaderboard thunk
 *   - should dispatch actions correctly when data fetching success
 *   - should dispatch actions and show alert when data fetching failed
 *
 */


import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../service/api';
import { asyncGetLeaderboard, ActionType, getLeaderboardActionCreator } from './action';
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';

const fakeLeaderboardResponse = [
    {
        user: {
            id: 'user-1',
            name: 'User 1',
            email: 'user1@mail.com',
            avatar: 'https://generated-image-url.jpg'
        },
        score: 100
    }
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetLeaderboard thunk', () => {
    beforeEach(() => {
        // backup original implementation
        api._getLeaderboard = api.getLeaderboard;
    });

    afterEach(() => {
        // restore original implementation
        api.getLeaderboard = api._getLeaderboard;

        // delete backup
        delete api._getLeaderboard;
    });

    it('should dispatch actions correctly when data fetching success', async () => {
        // arrange
        // stub implementation
        api.getLeaderboard = () => Promise.resolve(fakeLeaderboardResponse);
        // mock dispatch
        const dispatch = vi.fn();

        // action
        await asyncGetLeaderboard()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(getLeaderboardActionCreator(fakeLeaderboardResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it('should dispatch actions and show alert when data fetching failed', async () => {
        // arrange
        // stub implementation
        api.getLeaderboard = () => Promise.reject(fakeErrorResponse);
        // mock dispatch
        const dispatch = vi.fn();
        // mock alert
        window.alert = vi.fn();

        // action
        await asyncGetLeaderboard()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
});
