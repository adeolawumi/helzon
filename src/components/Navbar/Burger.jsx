import React, {useState} from 'react'
import styled from 'styled-components'
import MenuDropdown from './MenuDropdown'


const StyledBurger = styled.div` 
    .hamburger-container{
        position: relative;
        left: 95%;
        height: 1cm;
        aspect-ratio: 1;
        padding: 0.5rem;
    }
    .hamburger,
    .hamburger2 {
        height: 2px;
        width: 31px;
        background: #FA8202;
        margin-bottom: 8px;
        transition: 0.4s;
    }
    .hamburger3 {
        height: 2px;
        width: 31px;
        background: #FA8202;
        border: none;
        transition: 0.4s;
        transform:${({open})=> open? 'rotate(-39deg)':'rotate(0deg)'};
        margin-left:${({open})=> open? '1px':'0'}
    }
    .hamburger2{
        margin-left: 11px;
        transform:${({open})=> open? 'rotate(49deg)':'rotate(0deg)'};
        margin-left:${({open})=> open? '15px':'11px'}
    }
    .hamburger {
        transform:${({open})=> open? 'rotate(90deg)':'rotate(0deg)'};
        margin-left:${({open})=> open? '4px':'0'}
    }
    .MenuDropdown {
        display: ${({open})=> open? 'block':'none'};
    }
`

function Burger() {
    const [open, setOpen] = useState(false)
    return (
            <StyledBurger 
            open={open} 
            onClick={()=> setOpen(!open)}
            style={{width:'50px', position:'relative'}}>
                <div className='hamburger-container'
            style={{position:'absolute', left: '0'}}>
                    <div className="hamburger"></div>
                    <div className="hamburger2"></div>
                    <div className="hamburger3"></div>
                </div>
                <MenuDropdown className="MenuDropdown"/>
            </StyledBurger>
    )
}

export default Burger
