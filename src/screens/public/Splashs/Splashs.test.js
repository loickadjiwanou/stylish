import React from 'react';
import { render, screen } from '@testing-library/react';
import Splashs from './Splashs';
test('verify component', () => {
	render(<Splashs />);
	const linkElement = screen.getByText(/Splashs/i);
	expect(linkElement).toBeInTheDocument();
});
