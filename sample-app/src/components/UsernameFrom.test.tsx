import React from 'react';
import { render, screen } from '@testing-library/react';

import UsernameForm from './UsernameForm';
import userEvent from '@testing-library/user-event';

const mockPush = jest.fn();
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: mockPush,
    }),
}));

describe("UsernameForm tests", () => {
    describe("Text tests", () => {
        test("Label contains GitHub", () => {
            render(<UsernameForm />);

            expect(screen.getByText(/github/i)).toBeInTheDocument();
        });
    });

    describe("Functionality tests", () => {
        test("Clicking in the button without entering an username does not call history.push", () => {
            render(<UsernameForm />);

            const okButton = screen.getByText(/ok/i);
            userEvent.click(okButton);

            expect(mockPush).not.toHaveBeenCalled();
        });
    })
});
