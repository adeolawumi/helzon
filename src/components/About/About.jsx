import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import picture from '../../assets/bart-jaillet-LMFb7ZQuYd8-unsplash.png'
import glo from '../../assets/glo-logo-11.png'
import hp from '../../assets/Indomie-logo-11.png'
import indomie from '../../assets/Hp-11.png'
import schwepps from '../../assets/Shwepps-2-15.png'
import netflix from '../../assets/Netflix-11.png'
import spotify from '../../assets/spotify-icon-11-1.png'
import budweiser from '../../assets/budweiser-11.png'
import accessbank from '../../assets/access-bank-logo-11.png'
import GoToTop from '../Go-to-top/GoToTop'

function About() {
  return (
    <div className='about'>
        <Navbar />
        <div className="we-are-helzon">
            <div className="we-are-helzon-grid">
                <h1>We are - helzon</h1>
                <p>a company that builds and innovates.</p>
            </div>
        </div>
        <div className="about-text">
            <p>
                Much of the period between the first Roman invasion in 55 BC and the death of Henry VIII in 1547 was spent in warfare - 
                Anglo-Saxon and Viking invasions were followed by the Norman Conquest in 1066. The Hundred Years' War dominated the 14th 
                and 15th centuries and, scarely had it ended, aristocratic rivalries for the throne led to the Wars of the Roses. <br /> <br />
                The Elizabethan Age heralded a period of great change and international expansion, but was followed by civil war in the 
                17th century. By the end of the 19th century, the industrial revolution and the establishment of a parliamentary system 
                and the growth of an Empire had transformed the country. <br /> <br /> During the latter half of the 20th century, following the ravages 
                of two world wars and the end of its imperial adventure, England was forced to redefine its relationship with the rest of Europe.
            </p>
        </div>
        <div>
            <img src={picture} alt="" />
        </div>
        <div className='about-conclusion'>
            <p>We create our own <span className="orange">indepedent business</span> which operates internationally under separate brands in various niches of the 
            <span className="orange">tech and design industry</span>.</p>
        </div>

        <div className="scroller-container">
            <div className="scroller-text">
                <h1>Brands we work with</h1>
                <p>Trusted by 50+ of the world’s leading companies</p>
            </div>
            <div className="scroller-wrapper">
                <div className="scroller up">
                    <div><img src={glo} alt="" /></div>
                    <div><img src={netflix} alt="" /></div>
                    <div><img src={budweiser} alt="" /></div>
                    <div><img src={accessbank} alt="" /></div>
                    <div><img src={schwepps} alt="" /></div>
                    <div><img src={indomie} alt="" /></div>
                    <div><img src={spotify} alt="" /></div>
                    <div><img src={hp} alt="" /></div>
                    <div><img src={glo} alt="" /></div>
                    <div><img src={netflix} alt="" /></div>
                    <div><img src={budweiser} alt="" /></div>
                    <div><img src={accessbank} alt="" /></div>
                </div>
                <div className="scroller down">
                    <div><img src={glo} alt="" /></div>
                    <div><img src={accessbank} alt="" /></div>
                    <div><img src={schwepps} alt="" /></div>
                    <div><img src={hp} alt="" /></div>
                    <div><img src={netflix} alt="" /></div>
                    <div><img src={budweiser} alt="" /></div>
                    <div><img src={indomie} alt="" /></div>
                    <div><img src={spotify} alt="" /></div>
                    <div><img src={glo} alt="" /></div>
                    <div><img src={accessbank} alt="" /></div>
                    <div><img src={schwepps} alt="" /></div>
                    <div><img src={hp} alt="" /></div>
                </div>
            </div>
            <GoToTop/>
        </div>
        
    </div>
  )
}

export default About