import { useHistory } from 'react-router-dom';
import {goToCreate, goToFeed, goToLogin} from '../../router/coordinator'
import {LoginButton} from '../../styles/loginPage'
import { Menu } from '../../styles/menuCard';

const MenuCard = () => {
    const history = useHistory()
    const logout = (history) =>{
        localStorage.removeItem("token");
        goToLogin(history)
      }

    return (
        <div>
            {history.location.pathname==='/feed' ?
            <Menu>
            <LoginButton onClick={logout}>Logout</LoginButton>
            <LoginButton onClick={() => goToCreate(history)}>Create Post</LoginButton>
        </Menu>
        :
        <Menu>
            <LoginButton onClick={logout}>Logout</LoginButton>
            <LoginButton onClick={() => goToFeed(history)}>Home</LoginButton>
        </Menu>
    }
    </div>
    )
}

export default MenuCard