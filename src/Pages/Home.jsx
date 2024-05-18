import React from 'react'
import UpperNavbar from '../Components/UpperNavbar'
import Navbar from '../Components/Navbar'
import Main_Section from '../Components/Main_Section'
import Sales from '../Components/Sales'
import BestSellingProducts from '../Components/BestSellingProducts'
import NewArrival from '../Components/NewArrival'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Category from '../Components/Category'

const Home = () => {
    return (
        <div>
            <UpperNavbar />
            <Navbar />
            <Main_Section />
            <Sales />
            <Category />
            <BestSellingProducts />
            <NewArrival />
            <Banner />
            <Footer />
        </div>
    )
}

export default Home
