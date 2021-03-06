import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { goToFeed } from '../../router/coordinator';
import {HeaderLogo, HeaderDiv, HeaderH1, HeaderP} from '../header/styles'

const Header = (props) => {
const history = useHistory()

return (
    <div>
        <HeaderDiv>
            <HeaderLogo src={logo} alt="Baphofy logo" onClick={()=> goToFeed(history)}/>
            <HeaderH1>Baphofy </HeaderH1>
        </HeaderDiv>
    </div>
)
}
export default Header