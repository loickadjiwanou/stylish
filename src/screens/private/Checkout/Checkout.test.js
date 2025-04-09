import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkout from './Checkout';
test('verify component', () => {
	render(<Checkout />);
	const linkElement = screen.getByText(/Checkout/i);
	expect(linkElement).toBeInTheDocument();
});
