import React from 'react';
import { render, screen } from '@testing-library/react';
import FedaPayCheckout from './FedaPayCheckout';
test('verify component', () => {
	render(<FedaPayCheckout />);
	const linkElement = screen.getByText(/FedaPayCheckout/i);
	expect(linkElement).toBeInTheDocument();
});
