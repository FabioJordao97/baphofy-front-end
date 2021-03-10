import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUnprotectedPage } from '../hooks/useUnprotectedPage'
import { useForm } from '../hooks/useForm'
import { login } from '../constants/requisitions'
import { goToSignup } from '../router/coordinator'
import { LoginButton, LoginButtonDiv, LoginDiv } from '../styles/loginPage'
import Footer from '../components/footer/footer'

const LoginPage = () => {

    useUnprotectedPage()

    const history = useHistory()

    const { form, onChange, resetForm } = useForm({ email: '', password: '' })
    const handleInput = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }
    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
        resetForm()
    }
    return (
        <LoginDiv>
            <h2>Your darkest sound</h2>
            <h3>Present yourself, mortal!</h3>
            <form onSubmit={handleSubmission}>
                <input
                    placeholder="Tell me your email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInput} />

                    <br />

                <input
                    placeholder="Tell me your password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInput} />

                    <br />
                <LoginButtonDiv>
                <LoginButton type="submit">
                    Login
            </LoginButton>
            </LoginButtonDiv>
            </form>


            <p>Still haven't joined the realm of darkness?</p>
            <LoginButton onClick={() => goToSignup(history)}>Join Now</LoginButton>
            <Footer />
        </LoginDiv>
    )
}
export default LoginPage
