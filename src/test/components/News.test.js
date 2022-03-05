import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import News from '../../components/News';

afterEach(cleanup);

it('should render news component', () => {
    const news = {
        title: 'News Title',
        description: 'News description',
        urlToImage: 'http://someimage.com'
    }
    render(<News news={news} />);
    const element = screen.getByTestId('news');
    expect(element).toBeInTheDocument();
})