import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CreatePost from '../pages/createPostPage'
import FeedPage from '../pages/feedPage'
import LoginPage from '../pages/loginPage'
import PostPage from '../pages/postPage'
import Signup from '../pages/signupPage'

const Router = () => {

    return (
        <BrowserRouter>
        <Switch>

            <Route exact path={['/login']}>
            <LoginPage/>
            </Route>

            <Route exact path ={'/signup', '/'}>
                <Signup/>
            </Route>

            <Route exact path ={'/post/:id'}>
                <PostPage/>
            </Route>

            <Route exact path ={'/feed'}>
                <FeedPage/>
            </Route>

            <Route exact path ={'/create'}>
                <CreatePost/>
            </Route>

            <Route>
                <div>
                    Page not found.
                </div>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router