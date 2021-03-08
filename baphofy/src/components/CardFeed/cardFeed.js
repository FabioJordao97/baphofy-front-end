import { useHistory } from "react-router-dom"
import { goToPost } from "../../router/coordinator"

const CardFeed = (props) => {

    const history = useHistory()
    return (
        <div>
            <h3>Author: {props.nickname}</h3>
            <p>{props.title}</p>
            <p>{props.file}</p>
            <img src={props.profilePicture}/>
            <p onClick={() => goToPost(history, props.id)}>See details</p>
        </div>
    )
}

export default CardFeed