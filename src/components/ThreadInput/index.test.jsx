/**
 * test scenario
 *
 * - ThreadInput component
 *   - should render thread input form correctly
 *   - should handle thread creation correctly
 *   - should show error messages when submitting empty form
 *   - should disable post button when title or body is empty
 *   - should enable post button when title and body are filled
 */

import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './index';

expect.extend(matchers);

describe('ThreadInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render thread input form correctly', () => {
        // Arrange
        const createThread = vi.fn();

        // Act
        render(<ThreadInput createThread={createThread} />);

        // Assert
        expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('What\'s on your mind?')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Add category (optional)')).toBeInTheDocument();
        expect(screen.getByText('Post')).toBeInTheDocument();
    });

    it('should handle thread creation correctly', () => {
        // Arrange
        const createThread = vi.fn();
        render(<ThreadInput createThread={createThread} />);

        const titleInput = screen.getByPlaceholderText('Title');
        const bodyInput = screen.getByPlaceholderText('What\'s on your mind?');
        const categoryInput = screen.getByPlaceholderText('Add category (optional)');
        const postButton = screen.getByText('Post');

        // Act
        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        fireEvent.change(bodyInput, { target: { value: 'Test Body' } });
        fireEvent.change(categoryInput, { target: { value: 'test' } });
        fireEvent.click(postButton);

        // Assert
        expect(createThread).toHaveBeenCalledWith('Test Title', 'Test Body', 'test');
        expect(titleInput.value).toBe('');
        expect(bodyInput.value).toBe('');
        expect(categoryInput.value).toBe('');
    });

    it('should show error messages when submitting empty form', () => {
        // Arrange
        const createThread = vi.fn();
        render(<ThreadInput createThread={createThread} />);

        const postButton = screen.getByText('Post');

        // Act
        fireEvent.click(postButton);

        // Assert
        expect(createThread).not.toHaveBeenCalled();
    });

    it('should disable post button when title or body is empty', () => {
        // Arrange
        const createThread = vi.fn();
        render(<ThreadInput createThread={createThread} />);

        const postButton = screen.getByText('Post');

        // Assert
        expect(postButton.closest('button').disabled).toBeTruthy();
    });

    it('should enable post button when title and body are filled', () => {
        cleanup(); // Ensure clean state
        // Arrange
        const createThread = vi.fn();
        render(<ThreadInput createThread={createThread} />);

        const titleInput = screen.getByPlaceholderText('Title');
        const bodyInput = screen.getByPlaceholderText('What\'s on your mind?');
        const postButton = screen.getByText('Post');

        // Act
        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        fireEvent.change(bodyInput, { target: { value: 'Test Body' } });

        // Assert
        expect(postButton).not.toBeDisabled();
    });
});