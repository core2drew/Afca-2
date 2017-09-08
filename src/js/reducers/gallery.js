var gallery = (state = {
    message: "Gallery"
}, action) => {
    switch (action.type) {
        case 'INIT':
            return {...state, message: action.message};
        default:
            return state
    }
}

export default gallery