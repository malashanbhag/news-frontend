import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Header from '../../components/Header';

afterEach(cleanup);

it('should render header component', () => {
    render(<Header />);
    const element = screen.getByTestId('header');
    expect(element).toBeInTheDocument();
})

it('should render the props passed to the header component', () => {
    render(<Header text="Header Title"/>);
    const element = screen.getByText("Header Title");
    expect(element).toBeInTheDocument();

})