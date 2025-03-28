import React from 'react';
import { render, screen } from '@testing-library/react';
import TopBar from './TopBar';
test('verify component', () => {
	render(<TopBar />);
	const linkElement = screen.getByText(/TopBar/i);
	expect(linkElement).toBeInTheDocument();
});
