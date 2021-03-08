import React from 'react'
import { useHistory } from 'react-router-dom'
import { baseURLPost } from '../constants/baseUrl'
import {useProtectedPage} from '../hooks/useProtectedPage'
import { useRequestData } from '../hooks/useRequestData'
import CardFeed from '../components/CardFeed/cardFeed'

const FeedPage = (props) => {

    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData(`${baseURLPost}/music/all`, [])
    return (
        <div>
            {!posts ? <p>Carregando...</p> : posts.map((post)=>{
               return <CardFeed
               id={post.id} title={post.title} file={post.file} authorId={post.author_id} nickname={post.nickname} profilePicture={post.profilePicture}
               />
            })}
        </div>
    )
}

export default FeedPage