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
        case "LOGIN_FAIL" : 
            return {
                ...state,
                error: action.payload
            }
        case "LOGIN_SUC" : 
        
            return {
                ...state,
                user: action.payload
            }
        case "LOGOUT_SUC" : 

            return {
                ...state,
                user: null
            }
    
        default:
            return state;
    }
}