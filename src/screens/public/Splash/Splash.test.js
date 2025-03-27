import React from 'react';
import { render, screen } from '@testing-library/react';
import Splash from './Splash';
test('verify component', () => {
	render(<Splash />);
	const linkElement = screen.getByText(/Splash/i);
	expect(linkElement).toBeInTheDocument();
});
