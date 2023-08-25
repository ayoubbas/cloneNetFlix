import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
const Home = () => {
  return (
    <>
    <Main />
    <Row title="Up comming" fetchUrl={requests.requestUpcoming} />
    <Row title="Papular" fetchUrl={requests.requestPopular} />
    <Row title="" fetchUrl={requests.requestHorror} />
    <Row title="Up comming" fetchUrl={requests.requestTopRated} />
    <Row title="Up comming" fetchUrl={requests.requestTrending} />
    </>
  )
}

export default Home