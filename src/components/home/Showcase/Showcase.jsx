import React, { useState, useEffect } from 'react'
import './Showcase.css'
import  {Showcasedata} from './Showcasedata'

function Showcase() {
    const [currentShowcase, setCurrentShowcase] = useState(0);
    const showcaseLength = Showcasedata.length;

    let autoScroll = true
    let showcaseInterval
    let intervalTime = 10000

    const nextSlide = () => {
        
            if (currentShowcase === showcaseLength - 1){ setCurrentShowcase(0) } else {setCurrentShowcase(currentShowcase + 1)}
    };

    function auto() {
        showcaseInterval = setInterval(nextSlide, intervalTime) 
    }

    useEffect(()=>{
            if (autoScroll) {
                auto();
            }
            return() => clearInterval(showcaseInterval)
    }, [currentShowcase])

    useEffect(()=>{
        setCurrentShowcase(0)
    },[])

    return (
        <div className='the-showcase'>
            {Showcasedata.map((Showcase, index) => {
                return (
                    <div 
                    className={index===currentShowcase? "showcase-container current": "showcase-container not-current"}
                    key={index}
                    style={{
                        background: `URL(${process.env.PUBLIC_URL + `/Imgs/bgimage${index + 1}.jpg`})`, 
                     backgroundSize:'cover',
                    }}
                    >           
                        {index===currentShowcase && (
                            // <div> 
                                <div 
                                className="showcase-texts">
                                    <h1>{Showcase.text1}</h1>
                                    <h1>{Showcase.text2}</h1>
                                    <p className='subtext'>{Showcase.subtext}</p>
                                </div>
                            // </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Showcase