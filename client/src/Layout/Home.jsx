import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Gen_all from '../components/devices/Gen_all'
import Third from '../components/ThirdSlide/Third/Third'
import Footer from '../components/Footer/Footer'

export default function HomeLayout() {
    return (
        <>
            <Navbar />
            <Home />
            <Gen_all />
            <Third />
            <Footer/>
        </>
    )
}
