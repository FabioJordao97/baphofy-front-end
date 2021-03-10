import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Footer from '../components/footer/footer'
import MenuCard from '../components/MenuCard/MenuCard'
import { baseURLPost } from '../constants/baseUrl'
import { useProtectedPage } from '../hooks/useProtectedPage'
import {DivProfile, FeedPicture, FeedSpan} from '../styles/feedPage'

const PostPage = (props) => {
    useProtectedPage()
    const params = useParams()
    const history = useHistory()
    const [details, setDetails] = useState([])

    const postDetails = () => {
        axios
        .get(`${baseURLPost}/music/${params.id}`,
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            setDetails(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    useEffect(()=>{
        postDetails()
    }, [details])
    return (
        <div>
            <MenuCard />
            {details.length === 0 ? <p>Carregando...</p> :
            <div>
            <DivProfile>
            <FeedPicture src={details.profilePicture}/>
            <p>{details.nickname}</p>            
            </DivProfile>
            <p>Title: {details.title}</p>
            <p>Album: {details.album}</p>
            <p>Genre: {details.genre}</p>
            <p>Release date: {details.date}</p>
            <FeedSpan onClick={() => window.open(details.file)}>Listen now!</FeedSpan>  
            <Footer />
            </div>
            }
        </div>
    )
}

export default PostPage