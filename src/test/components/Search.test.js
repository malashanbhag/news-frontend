import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Search from '../../components/Search';

afterEach(cleanup);

it('should render search component', () => {
    render(<Search />);
    const element = screen.getByTestId('search');
    expect(element).toBeInTheDocument();
})