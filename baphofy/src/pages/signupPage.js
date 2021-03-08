import React from 'react'
import { useHistory } from 'react-router-dom'
import { signup } from '../constants/requisitions'
import { useForm } from '../hooks/useForm'
import { useUnprotectedPage } from '../hooks/useUnprotectedPage'
import { goToLogin } from '../router/coordinator'
import { LoginDiv } from '../styles/loginPage'

const Signup = () =>{

    useUnprotectedPage()
    const history = useHistory()
    const {form, onChange, resetForm} = useForm({name: '', nickname: '', password: '', profilePicture: '', email: ''})
    const handleInput = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }
    const handleSubmission = (event) => {
        event.preventDefault()
        signup(form, history)
        resetForm()
    }
    return (
        <LoginDiv>
        <h2>Your darkest sound</h2>
        <h3>Join us, mortal!</h3>
        <form onSubmit={handleSubmission}>

            <input
            placeholder="Insert Your Name"
            type="name"
            name="name"
            value={form.name}
            onChange={handleInput}
            />
            <input
            placeholder="Insert Your nickname"
            type="nickname"
            name="nickname"
            value={form.nickname}
            onChange={handleInput}
            />
            <input
            placeholder="Insert Your Profile Picture"
            type="profilePicture"
            name="profilePicture"
            value={form.profilePicture}
            onChange={handleInput}
            />
            <input
                placeholder="Insert Your Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleInput} />

            <input
                placeholder="Insert Your Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleInput} />

            <button type="submit">
                Create
        </button>
        </form>


        <p>Already joined the realm of darkness?</p>
        <button onClick={() => goToLogin(history)}>login</button>
    </LoginDiv>
)
}

export default Signup