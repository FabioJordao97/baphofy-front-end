import axios from 'axios'
import { baseURL } from './baseUrl'
import goToFeed from '../router/coordinator'

const token = localStorage.getItem('token')


export const login = (body, history) => {
    axios
    .post(`${baseURL}/login`, body)

    .then((res) =>{
        localStorage.setItem("token", res.data.token)
        goToFeed(history)
    })

    .catch((error)=>{
        console.log(error.message)
        window.alert('Invalid credentials')
    })
}

export const signup = (body, history) => {
    axios
    .post(`${baseURL}/signup`, body)

    .then((res)=>{
        localStorage.setItem('token', res.data.token)
        goToFeed(history)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

export const createPost = (body, history) => {
    axios
    .post(`${baseURL}/music`, body, {
        headers: {
            Authorization: token
        }
    })

    .then(()=>{
        window.alert('Post successfully created!')
        goToFeed(history)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}