import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import Gen_all from '../Components/devices/Gen_all'
import Third from '../Components/ThirdSlide/Third/Third'
import Footer from '../Components/Footer/Footer'

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
