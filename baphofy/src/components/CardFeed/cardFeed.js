import { useHistory } from "react-router-dom"
import { goToPost } from "../../router/coordinator"
import { DivProfile, FeedDiv, FeedP, FeedPicture, FeedSong, FeedSpan } from "../../styles/feedPage"


const CardFeed = (props) => {

    const history = useHistory()
    return (
        <FeedDiv>
            <DivProfile>
            <FeedPicture src={props.profilePicture}/>
            <h3>{props.nickname}</h3>            
            </DivProfile>
            <FeedSong>Song: {props.title}</FeedSong>
            <span>What are you waiting for? </span>
            <FeedSpan onClick={() => window.open(props.file)}>Listen now!</FeedSpan>            
            <FeedP onClick={() => goToPost(history, props.id)}>See details</FeedP>
            
        </FeedDiv>
    )
}

export default CardFeed