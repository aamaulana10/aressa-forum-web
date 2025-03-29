/**
 * test scenario for thread detail action
 *
 * - asyncGetThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import api from "../../service/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { asyncGetThreadDetail, getThreadDetailActionCreator } from "./action";

const fakeThreadDetailResponse = [
    {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
            id: "users-1",
            name: "John Doe",
            avatar: "https://generated-image-url.jpg"
        },
        upVotesBy: [],
        downVotesBy: [],
        comments: [],
    }
]

const fakeErrorResponse = new Error('Ups, something went wrong');
const fakeThreadId = 'thread-1';

describe('asyncGetThreadDetail thunk', () => {
    beforeEach(() => {
        api._getThreadDetail = api.getThreadDetail;
    });

    afterEach(() => {
        api.getThreadDetail = api._getThreadDetail;

        // delete backup data
        delete api._getThreadDetail;
    });

    it('should dispatch action correctly when data fetching success', async () => {
        // arrange
        // stub implementation
        api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);
        // mock dispatch
        const dispatch = vi.fn();
        // action
        await asyncGetThreadDetail(fakeThreadId)(dispatch);
        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(getThreadDetailActionCreator(fakeThreadDetailResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    })

    it('should dispatch action and call alert correctly when data fetching failed', async () => {
        // arrange
        // stub implementation
        api.getThreadDetail = () => Promise.reject(fakeErrorResponse);
        // mock dispatch
        const dispatch = vi.fn();
        // mock alert
        window.alert = vi.fn();
        // action
        await asyncGetThreadDetail()(dispatch);
        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    })
})