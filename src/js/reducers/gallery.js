var gallery = (state = {
}, action) => {
    switch (action.type) {
        case 'INIT':
            return {...state, message: action.message};
        default:
            return state
    }
}

export default gallery