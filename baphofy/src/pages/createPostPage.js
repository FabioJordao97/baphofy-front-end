import { useHistory } from "react-router-dom"
import Footer from "../components/footer/footer"
import MenuCard from "../components/MenuCard/MenuCard"
import { createPost } from "../constants/requisitions"
import { useForm } from "../hooks/useForm"
import { useProtectedPage } from "../hooks/useProtectedPage"
import { LoginButtonDiv, LoginButton, LoginDiv } from '../styles/loginPage'

const CreatePost = () =>{
    useProtectedPage()
    const history = useHistory()
    const {form, onChange, resetForm} = useForm({title: '', file: '', album: '', genre: ''})

    const handleInput = (event) =>{
        const {value, name} = event.target
        onChange(value, name)
    }

    const handleSubmission = (event)=>{
        event.preventDefault()
        createPost(form, history)
        resetForm()
    }
   
    return (
        <div>
            <MenuCard />
            <LoginDiv>
            
            <h2>Your darkest sound</h2>
        <h3>Share your music, mortal!</h3>
        <form onSubmit={handleSubmission}>

            <input
            placeholder="Tell me your creation's title"
            type="title"
            name="title"
            value={form.title}
            onChange={handleInput}
            />
            <br />
            <input
            placeholder="Tell me your creation's album"
            type="album"
            name="album"
            value={form.album}
            onChange={handleInput}
            />
            <br />
            <input
            placeholder="Tell me your creation's genre"
            type="genre"
            name="genre"
            value={form.genre}
            onChange={handleInput}
            />
            <br />
             <input
            placeholder="Give me your creation's file"
            type="link"
            name="file"
            value={form.file}
            onChange={handleInput}
            />
             <br />
             <LoginButtonDiv>
            <LoginButton type="submit">
               Share It!
               
        </LoginButton>
        </LoginButtonDiv>
        </form>
        </LoginDiv>
        <Footer />
        </div>
    )
    
}

export default CreatePost