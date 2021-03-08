import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { baseURLPost } from '../constants/baseUrl'
import { useProtectedPage } from '../hooks/useProtectedPage'

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
            {details.length === 0 ? <p>Carregando...</p> :
            <div>
            <p>Author: {details.nickname}</p>
            <img src={details.profilePicture}/>
            <p>Title: {details.title}</p>
            <p>Album: {details.album}</p>
            <p>Genre: {details.genre}</p>
            <p>Release date: {details.date}</p>
            <p>{details.file}</p>
            </div>
            }
        </div>
    )
}

export default PostPage