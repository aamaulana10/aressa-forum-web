import React from 'react';
import Avatar from '../components/Avatar';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        name: { control: 'text' },
    },
    tags: ['autodocs'],
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'John Doe',
};