import React from 'react';
import { render, screen } from '@testing-library/react';
import StarRating from './StarRating';
test('verify component', () => {
	render(<StarRating />);
	const linkElement = screen.getByText(/StarRating/i);
	expect(linkElement).toBeInTheDocument();
});
