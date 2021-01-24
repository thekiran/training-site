import { Fragment } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Discover from '../../components/Discover/Discover'
import Brands from '../../components/Brands/brands'
import Book from '../../components/Book/Book'

const Home = () => {
    return (
        <Fragment>
          <Navbar />
          <Hero />
          <Discover />
          <Brands />
          <Book  />
          <div className="space"></div>
        </Fragment>
    )
}

export default Home
