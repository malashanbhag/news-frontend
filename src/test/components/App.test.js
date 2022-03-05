/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../../components/App';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

var mock = new MockAdapter(axios);

mock.onGet("/topHeadlines").reply(200, {
  status: 'ok',
  totalResults: 20,
  articles: [
    { title: 'some title', description: 'some decription' }
  ]
});

it('should render app component', async () => {
    await act(async () => {
      const { getByTestId } = render(<App />); 
      expect(getByTestId('header')).toHaveTextContent('News');
      expect(getByTestId('search')).toBeTruthy();
      expect(getByTestId('pagination')).toBeTruthy();
    }) 
});


