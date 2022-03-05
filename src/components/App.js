import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import Search from './Search';
import News from './News';
import PaginationCustom from './PaginationCustom';
import { initialState, reducer } from '../store/reducer';
import { BASE_API_URL, PER_PAGE } from '../utils/constants';
import '../App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { news, loading, errorMessage, pageCount } = state;
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (e, p) => {
    setActivePage(p);
  }

  useEffect(() => {
    dispatch({
      type: "SEARCH_REQUEST"
    })
    axios.get(`${BASE_API_URL}/topHeadlines?country=in&page=${activePage}&pageSize=${PER_PAGE}`).then(response => {
      console.log("response ")
      console.log(response)
      dispatch({
        type: "SEARCH_SUCCESS",
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: "SEARCH_FAILURE",
        error: "Something went wrong while fetching data"
      })
    })
  }, [activePage])

  const search = value => {
    dispatch({
      type: "SEARCH_REQUEST"
    })
    axios.get(`${BASE_API_URL}/everything?q=${value}&page=${activePage}&pageSize=${PER_PAGE}`).then(response => {
      dispatch({
        type: "SEARCH_SUCCESS",
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: "SEARCH_FAILURE",
        error: "Something went wrong while fetching data"
      })
    })
  }

  const fetchedNews = 
  loading && !errorMessage ? (
    <div>Loading</div>
  ) : errorMessage ? (
    <div>{errorMessage}</div>
  ) : (
      news?.articles.length === 0 ? 
        (<div>No news articles found</div>) :
        (news?.articles.map((article, index) => <News key={`${index}-${article.title}`} news={article}/>)
    )
  )

  return (
    <div className='App'>
      <Header text='News'/>
      <Search search={search} />
      <div className='App-news'>{fetchedNews}</div>
      <PaginationCustom pageCount={pageCount} handlePageChange={handlePageChange}/>
    </div>
  );
}

export default App;
