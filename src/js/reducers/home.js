var home = (state = {
    sliderdata: []
}, action) => {
    switch (action.type) {
        case 'INIT':
            return {...state, sliderdata: action.sliderdata};
        default:
            return state
    }
}

export default home