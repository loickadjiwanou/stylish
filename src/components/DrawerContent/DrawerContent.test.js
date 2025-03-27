import React from 'react';
import { render, screen } from '@testing-library/react';
import DrawerContent from './DrawerContent';
test('verify component', () => {
	render(<DrawerContent />);
	const linkElement = screen.getByText(/DrawerContent/i);
	expect(linkElement).toBeInTheDocument();
});
