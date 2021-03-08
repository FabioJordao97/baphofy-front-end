import { useHistory } from "react-router-dom"
import { createPost } from "../constants/requisitions"
import { useForm } from "../hooks/useForm"
import { useProtectedPage } from "../hooks/useProtectedPage"

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
    console.log(form.file)
    return (
        <div>
            <h2>Your darkest sound</h2>
        <h3>Share your music, mortal!</h3>
        <form onSubmit={handleSubmission}>

            <input
            placeholder="Insert The Title"
            type="title"
            name="title"
            value={form.title}
            onChange={handleInput}
            />
            <input
            placeholder="Insert The Album"
            type="album"
            name="album"
            value={form.album}
            onChange={handleInput}
            />
            <input
            placeholder="Insert The Genre"
            type="genre"
            name="genre"
            value={form.genre}
            onChange={handleInput}
            />
             <input
            placeholder="Insert The File"
            type="link"
            name="file"
            value={form.file}
            onChange={handleInput}
            />
             
            <button type="submit">
               Share It!
        </button>
        </form>
        </div>
    )
    
}

export default CreatePost