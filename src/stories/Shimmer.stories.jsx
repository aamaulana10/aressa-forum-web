import React from 'react';
import Shimmer from '../components/Shimmer';

export default {
    title: 'Components/Shimmer',
    component: Shimmer,
    tags: ['autodocs'],
    argTypes: {
        width: {
            control: 'text',
            description: 'Width class from Tailwind',
        },
        height: {
            control: 'text',
            description: 'Height class from Tailwind',
        },
        rounded: {
            control: 'text',
            description: 'Border radius class from Tailwind',
        },
    },
};

export const Default = {
    args: {
        width: 'w-full',
        height: 'h-4',
        rounded: 'rounded',
    },
};

export const Circle = {
    args: {
        width: 'w-8',
        height: 'h-8',
        rounded: 'rounded-full',
    },
};

export const Large = {
    args: {
        width: 'w-32',
        height: 'h-8',
        rounded: 'rounded-md',
    },
};

export const ShimmerGroup = {
    render: () => (
        <div className="space-y-4">
            <Shimmer width="w-32" height="h-8" rounded="rounded-full" />
            <Shimmer width="w-full" height="h-4" rounded="rounded" />
            <Shimmer width="w-3/4" height="h-4" rounded="rounded" />
        </div>
    ),
};
