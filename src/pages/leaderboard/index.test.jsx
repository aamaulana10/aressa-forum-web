import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import LeaderboardPage from '.';

const mockLeaderboards = [
    {
        user: {
            id: 'user-1',
            name: 'John Doe',
            email: 'john@example.com'
        },
        score: 100
    },
    {
        user: {
            id: 'user-2',
            name: 'Jane Smith',
            email: 'jane@example.com'
        },
        score: 85
    }
];

const store = configureStore({
    reducer: {
        leaderboards: (state = [], action) => {
            if (action.type === 'GET_LEADERBOARD') {
                return action.payload.leaderboards;
            }
            return state;
        }
    },
    preloadedState: {
        leaderboards: mockLeaderboards
    }
});

describe('LeaderboardPage', () => {
    it('renders leaderboard with user rankings', () => {
        render(
            <Provider store={store}>
                <LeaderboardPage />
            </Provider>
        );

        expect(screen.getByText('Leaderboard')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('100 points')).toBeInTheDocument();
        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.getByText('85 points')).toBeInTheDocument();
    });
});