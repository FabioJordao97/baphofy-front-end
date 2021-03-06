export const goToLogin = (history) => {
    history.push('/login')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToSignup = (history) => {
    history.push('/signup')
}

export const goToPost = (history, id) => {
    history.push(`/post/${id}`)
}

export const goToCreate = (history) =>{
    history.push('/create')
}