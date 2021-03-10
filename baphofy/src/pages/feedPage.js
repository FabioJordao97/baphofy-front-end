import React from 'react'
import { useHistory } from 'react-router-dom'
import { baseURLPost } from '../constants/baseUrl'
import {useProtectedPage} from '../hooks/useProtectedPage'
import { useRequestData } from '../hooks/useRequestData'
import CardFeed from '../components/CardFeed/cardFeed'
import FeedFooter from '../components/footer/feedFooter'
import MenuCard from '../components/MenuCard/MenuCard'
import { Home } from '../styles/feedPage'

const FeedPage = (props) => {

    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData(`${baseURLPost}/music/all`, [])
    return (
        <div>
            <MenuCard />
            <Home>Home</Home>
            {!posts ? <p>Carregando...</p> : posts.map((post)=>{
               return <CardFeed
               id={post.id} title={post.title} file={post.file} authorId={post.author_id} nickname={post.nickname} profilePicture={post.profilePicture}
               />
            })}
            <FeedFooter />
        </div>
    )
}

export default FeedPage