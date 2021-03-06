import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUnprotectedPage } from '../hooks/useUnprotectedPage'
import { useForm } from '../hooks/useForm'
import { login } from '../constants/requisitions'
import { goToSignup } from '../router/coordinator'
import { LoginDiv } from '../styles/loginPage'

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
                    Login
            </button>
            </form>


            <p>Still haven't joined the realm of darkness? Join now</p>
            <button onClick={() => goToSignup(history)}>SignUp</button>
        </LoginDiv>
    )
}
export default LoginPage
