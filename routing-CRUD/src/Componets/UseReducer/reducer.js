export const myReducer = (state, action) => {

    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
    
        default:
            return state;
    }

    // if(action.type === "INCREMENT"){
    //     return{
    //         ...state,
    //         count: state.count + 1
    //     }
    // }else if(){

    // }

}