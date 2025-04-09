import React from 'react';
import { render, screen } from '@testing-library/react';
import BuyNow from './BuyNow';
test('verify component', () => {
	render(<BuyNow />);
	const linkElement = screen.getByText(/BuyNow/i);
	expect(linkElement).toBeInTheDocument();
});
