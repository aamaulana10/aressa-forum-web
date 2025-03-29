import ThreadItem from '../components/ThreadItem';

export default {
    title: 'Components/ThreadItem',
    component: ThreadItem,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

const mockThread = {
    id: '1',
    title: 'Sample Thread Title',
    body: 'This is a sample thread body with some content to demonstrate how the ThreadItem component renders longer text. It might include some technical discussion or interesting topics.',
    category: 'discussion',
    createdAt: '2023-05-20T07:00:00.000Z',
    owner: {
        id: 'user-1',
        name: 'John Doe',
        email: 'john@example.com'
    },
    upVotesBy: ['user-2', 'user-3'],
    downVotesBy: ['user-4'],
    totalComments: 5
};

export const Default = {
    args: {
        thread: mockThread
    }
};

export const WithLongTitle = {
    args: {
        thread: {
            ...mockThread,
            title: 'This is a very long thread title that might need to be handled properly in the UI to ensure it does not break the layout',
        }
    }
};

export const WithManyVotes = {
    args: {
        thread: {
            ...mockThread,
            upVotesBy: Array(50).fill().map((_, i) => `user-${i}`),
            downVotesBy: Array(25).fill().map((_, i) => `user-${i + 50}`),
        }
    }
};

export const WithManyComments = {
    args: {
        thread: {
            ...mockThread,
            totalComments: 999,
        }
    }
};