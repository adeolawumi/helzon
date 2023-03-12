import React from 'react'
import './home.css'
import Showcase from './Showcase/Showcase'
import WeBuild from './We-build/We-build'
import WhyUs from './Why us/WhyUs'
import Testimonial from './Testimonial/Testimonial'
import GoToTop from '../Go-to-top/GoToTop'


function Home() {
    return (
        <div style={{position: 'relative', width:'100%'}}>
            <Showcase/>
            <WeBuild/>
            <WhyUs/>
            <Testimonial/>
            <GoToTop />
        </div>
    )
}

export default Home
