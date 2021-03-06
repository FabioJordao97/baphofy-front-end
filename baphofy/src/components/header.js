import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { goToFeed } from '../router/coordinator';

const Header = (props) => {
const history = useHistory()

return (
    <div>
        <div>
            <img src={logo} alt="Baphofy logo" onClick={()=> goToFeed(history)}/>
            <h1>Baphofy - Seu Som mais Sombrio</h1>
        </div>
    </div>
)
}
export default Header