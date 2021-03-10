import React from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../components/footer/footer'
import { signup } from '../constants/requisitions'
import { useForm } from '../hooks/useForm'
import { useUnprotectedPage } from '../hooks/useUnprotectedPage'
import { goToLogin } from '../router/coordinator'
import { LoginButtonDiv, LoginButton, LoginDiv } from '../styles/loginPage'

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
            placeholder="Tell me your name"
            type="name"
            name="name"
            value={form.name}
            onChange={handleInput}
            />
            <br />
            <input
            placeholder="Tell me yournickname"
            type="nickname"
            name="nickname"
            value={form.nickname}
            onChange={handleInput}
            />
            <br />
            <input
            placeholder="Show me your profile picture"
            type="profilePicture"
            name="profilePicture"
            value={form.profilePicture}
            onChange={handleInput}
            />
            <br />
            <input
                placeholder="Tell me your email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleInput} />
            <br />
            <input
                placeholder="Create a password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleInput} />
            <br />
            <LoginButtonDiv>
            <LoginButton type="submit">
                Join!
        </LoginButton>
        </LoginButtonDiv>
        </form>


        <p>Already joined the realm of darkness?</p>
        <LoginButton onClick={() => goToLogin(history)}>Show Yourself!</LoginButton>
        <Footer />
    </LoginDiv>
)
}

export default Signup