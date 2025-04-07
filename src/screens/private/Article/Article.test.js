import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';
test('verify component', () => {
	render(<Article />);
	const linkElement = screen.getByText(/Article/i);
	expect(linkElement).toBeInTheDocument();
});
