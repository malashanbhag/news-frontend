import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import PaginationCustom from '../../components/PaginationCustom';

afterEach(cleanup);

it('should render pagination component', () => {
    const props = {
        pageCount: 1,
        handlePageChange: () => {}
    }
    render(<PaginationCustom props={props} />);
    const element = screen.getByTestId('pagination');
    expect(element).toBeInTheDocument();
})