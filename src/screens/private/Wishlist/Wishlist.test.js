import React from 'react';
import { render, screen } from '@testing-library/react';
import Wishlist from './Wishlist';
test('verify component', () => {
	render(<Wishlist />);
	const linkElement = screen.getByText(/Wishlist/i);
	expect(linkElement).toBeInTheDocument();
});
