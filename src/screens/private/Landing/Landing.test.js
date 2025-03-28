import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from './Landing';
test('verify component', () => {
	render(<Landing />);
	const linkElement = screen.getByText(/Landing/i);
	expect(linkElement).toBeInTheDocument();
});
