import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
const Home = () => {
  return (
    <>
   
    <Main />
    <Row rowIndex="1" title="Up comming" fetchUrl={requests.requestUpcoming} />
    <Row rowIndex="2" title="Papular" fetchUrl={requests.requestPopular} />
    <Row rowIndex="3" title="Horror" fetchUrl={requests.requestHorror} />
    <Row rowIndex="4" title="Top Rated" fetchUrl={requests.requestTopRated} />
    <Row rowIndex="5" title="Trending" fetchUrl={requests.requestTrending} />
    </>
  )
}

export default Home