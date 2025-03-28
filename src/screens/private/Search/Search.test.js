import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
test('verify component', () => {
	render(<Search />);
	const linkElement = screen.getByText(/Search/i);
	expect(linkElement).toBeInTheDocument();
});
