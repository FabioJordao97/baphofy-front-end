import React from 'react'
import { useHistory } from 'react-router-dom'
import useUnProtectedPage from '../hooks/useUnprotectedPage'
import useForm from '../hooks/useForm'
import { login } from '../constants/requisitions'

const LoginPage = () => {

    useUnProtectedPage()

    const history = useHistory()

    const {form, onChange, resetForm} = useForm({email: '', password: ''})
    const handleInput = (event) =>{
        const {value, name} = event.target
        onChange(value, name)
    }
    const handleSubmission = (event) =>{
        event.preventDefault()
        login(form, history)
        resetForm()
    }
    return (
        <div>
            <p>Login</p>
        </div>
    )
}
export default LoginPage
