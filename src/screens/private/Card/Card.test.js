import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
test('verify component', () => {
	render(<Card />);
	const linkElement = screen.getByText(/Card/i);
	expect(linkElement).toBeInTheDocument();
});
