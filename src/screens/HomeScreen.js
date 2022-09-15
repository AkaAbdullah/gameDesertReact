import React from 'react'
import BlogSction from '../components/BlogSction'
import Body from '../components/Body'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'
import ReleasedGames from '../components/ReleasedGames'
import Services from '../components/Services'
import TopHeader from '../components/TopHeader'
const HomeScreen = () => {
  return (
    <>
      <body id='top'>
        <TopHeader />
        <Body />
        <Services />
        <ReleasedGames />
        <BlogSction />
        <NewsLetter />
        <Footer />
      </body>
    </>
  )
}

export default HomeScreen
