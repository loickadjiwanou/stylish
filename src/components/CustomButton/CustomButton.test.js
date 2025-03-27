import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';
test('verify component', () => {
	render(<CustomButton />);
	const linkElement = screen.getByText(/CustomButton/i);
	expect(linkElement).toBeInTheDocument();
});
