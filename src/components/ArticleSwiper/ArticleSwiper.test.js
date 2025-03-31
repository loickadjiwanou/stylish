import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleSwiper from './ArticleSwiper';
test('verify component', () => {
	render(<ArticleSwiper />);
	const linkElement = screen.getByText(/ArticleSwiper/i);
	expect(linkElement).toBeInTheDocument();
});
