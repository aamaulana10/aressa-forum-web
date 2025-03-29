/**
 * skenario testing
 *
 * - ThreadItem component
 *   - should render thread item correctly
 *   - should handle thread click correctly
 *   - should handle thread upvote click correctly
 *   - should handle thread downvote click correctly
 */

import React from 'react';
import {
    describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadItem from '.';
import { formatDate } from '../../utils/formatDate';

expect.extend(matchers);

vi.mock('react-router-dom', () => ({
    useNavigate: vi.fn(),
}));

vi.mock('react-redux', () => ({
    useDispatch: vi.fn(),
    useSelector: vi.fn(),
}));

vi.mock('../../utils/formatDate', () => ({
    formatDate: vi.fn(),
}));

const mockThread = {
    id: 'thread-1',
    title: 'Test Thread',
    body: 'Test thread body',
    category: 'test',
    createdAt: '2021-06-21T07:00:00.000Z',
    owner: {
        id: 'users-1',
        name: 'John Doe',
    },
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
};

const mockAuthUser = {
    id: 'users-1',
    name: 'John Doe',
};

describe('ThreadItem component', () => {
    afterEach(() => {
        cleanup();
        vi.clearAllMocks();
    });

    it('should render thread item correctly', () => {
        // Arrange
        useSelector.mockImplementation(() => ({ authUser: mockAuthUser }));
        formatDate.mockImplementation(() => 'formatted date');

        // Action
        render(<ThreadItem thread={mockThread} />);

        // Assert
        expect(screen.getByText(mockThread.title)).toBeInTheDocument();
        expect(screen.getByText(mockThread.owner.name)).toBeInTheDocument();
        expect(screen.getByText(`#${mockThread.category}`)).toBeInTheDocument();
        expect(screen.getByText('0 upvotes')).toBeInTheDocument();
        expect(screen.getByText('0 downvotes')).toBeInTheDocument();
        expect(screen.getByText('0 Comments')).toBeInTheDocument();
    });

    it('should handle thread click correctly', async () => {
        // Arrange
        const mockNavigate = vi.fn();
        useNavigate.mockImplementation(() => mockNavigate);
        useSelector.mockImplementation(() => ({ authUser: mockAuthUser }));
        formatDate.mockImplementation(() => 'formatted date');

        // Action
        render(<ThreadItem thread={mockThread} />);
        await userEvent.click(screen.getByText(mockThread.title));

        // Assert
        expect(mockNavigate).toHaveBeenCalledWith(`/threads/${mockThread.id}`);
    });

    it('should handle thread upvote click correctly', async () => {
        // Arrange
        const mockDispatch = vi.fn();
        useDispatch.mockImplementation(() => mockDispatch);
        useSelector.mockImplementation(() => ({ authUser: mockAuthUser }));
        formatDate.mockImplementation(() => 'formatted date');

        // Action
        render(<ThreadItem thread={mockThread} />);
        await userEvent.click(screen.getByText('0 upvotes'));

        // Assert
        expect(mockDispatch).toHaveBeenCalled();
    });

    it('should handle thread downvote click correctly', async () => {
        // Arrange
        const mockDispatch = vi.fn();
        useDispatch.mockImplementation(() => mockDispatch);
        useSelector.mockImplementation(() => ({ authUser: mockAuthUser }));
        formatDate.mockImplementation(() => 'formatted date');

        // Action
        render(<ThreadItem thread={mockThread} />);
        await userEvent.click(screen.getByText('0 downvotes'));

        // Assert
        expect(mockDispatch).toHaveBeenCalled();
    });
});