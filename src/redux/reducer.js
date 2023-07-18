
const initialState = {
    title : 'old title',
    aboutTitle : 'old About title',
    contactTitle : ' '
}

export default function reducer (state =  initialState, action) {


    if(action.type === 'CHANGE_TITLE') {
        return { title : 'New title'}
    }

    else if(action.type === 'CHANGE_ABOUT_TITLE') {
        return { ...state, aboutTitle : 'New about title'}
    }

    else if(action.type === 'WITH_PARAMS') {
        return {...state, contactTitle : action.payload}
    }
     
    return state
}