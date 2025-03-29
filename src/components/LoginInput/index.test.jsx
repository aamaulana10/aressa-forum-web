/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call onSubmit function when login button is clicked
 */

import React from 'react';
import {
    describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from '.';

expect.extend(matchers);

describe('LoginInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle username typing correctly', async () => {
        // Arrange
        render(<LoginInput onSubmit={() => { }} />);
        const emailInput = await screen.getByPlaceholderText('Enter your email');

        // Action
        await userEvent.type(emailInput, 'emailtest');

        // Assert
        expect(emailInput).toHaveValue('emailtest');
    });

    it('should handle password typing correctly', async () => {
        // Arrange
        render(<LoginInput login={() => { }} />);
        const passwordInput = await screen.getByPlaceholderText('Enter your password');

        // Action
        await userEvent.type(passwordInput, 'passwordtest');

        // Assert
        expect(passwordInput).toHaveValue('passwordtest');
    });

    it('should call login function when login button is clicked', async () => {
        // Arrange
        const mockLogin = vi.fn();
        render(<LoginInput onSubmit={mockLogin} />);
        const emailInput = screen.getByPlaceholderText('Enter your email');
        await userEvent.type(emailInput, 'emailtest');
        const passwordInput = screen.getByPlaceholderText('Enter your password');
        await userEvent.type(passwordInput, 'passwordtest');
        const loginButton = screen.getByRole('button', { name: 'Sign In' });

        // Action
        await userEvent.click(loginButton);

        // Assert
        expect(mockLogin).toHaveBeenCalledWith({
            email: 'emailtest',
            password: 'passwordtest',
        });
    });
});
