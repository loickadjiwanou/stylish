import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
test('verify component', () => {
	render(<Login />);
	const linkElement = screen.getByText(/Login/i);
	expect(linkElement).toBeInTheDocument();
});
