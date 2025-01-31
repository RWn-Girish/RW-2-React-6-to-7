const initialState = {
    isCreated: false,
    error: null,
    user: null
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_SUC":
            return {
                ...state, 
                isCreated: true
            }
        case "REGISTER_REJ" : 
            return {
                ...state,
                error: action.payload
            }
    
        default:
            return state;
    }
}