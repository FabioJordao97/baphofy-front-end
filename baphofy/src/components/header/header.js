import React from 'react';
import logo from '../../assets/logo.jpg'
import {HeaderLogo, HeaderDiv, HeaderH1} from '../../styles/header'

const Header = (props) => {

return (
    <div>
        <HeaderDiv>
            <HeaderLogo src={logo} alt="Baphofy logo"/>
            <HeaderH1>Baphofy</HeaderH1>
        </HeaderDiv>
    </div>
)
}
export default Header