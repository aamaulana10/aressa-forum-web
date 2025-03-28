/**
 * test scenario for threads action
 *
 * - asyncGetAllThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { beforeEach, describe, afterEach, vi, it, expect } from 'vitest';
import api from '../../service/api';
import { asyncGetAllThreads, getAllThreadActionCreator } from './action';
const fakeThreadResponse = [
    {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        comments: [],
    }
];

const fakeUsersResponse = [
    {
        id: 'users-1',
        name: 'John Doe',
    }
];

const fakeThreadsWithOwner = [
    {
        ...fakeThreadResponse[0],
        owner: fakeUsersResponse[0]
    }
];


const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetAllThreads thunk', () => {
    beforeEach(() => {
        api._getAllUsers = api.getAllUsers;
        api._getAllThreads = api.getAllThreads;
    });

    afterEach(() => {
        api.getAllUsers = api._getAllUsers;
        api.getAllThreads = api._getAllThreads;

        // delete backup data
        delete api._getAllUsers;
        delete api._getAllThreads;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        // arrange
        // stub implementation
        api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
        api.getAllThreads = () => Promise.resolve(fakeThreadResponse);
        // mock dispatch
        const dispatch = vi.fn();

        // action
        await asyncGetAllThreads()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(getAllThreadActionCreator(fakeThreadsWithOwner));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });

    it('should dispatch action and call alert correctly when data fetching failed', async () => {
        // arrange
        // stub implementation
        api.getAllUsers = () => Promise.reject(fakeErrorResponse);
        api.getAllThreads = () => Promise.reject(fakeErrorResponse);
        // mock dispatch
        const dispatch = vi.fn();
        // mock alert
        window.alert = vi.fn();
        // action
        await asyncGetAllThreads()(dispatch);
        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    });
});