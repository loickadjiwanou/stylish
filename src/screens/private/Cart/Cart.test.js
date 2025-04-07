import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';
test('verify component', () => {
	render(<Cart />);
	const linkElement = screen.getByText(/Cart/i);
	expect(linkElement).toBeInTheDocument();
});
