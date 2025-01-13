const initalState = {
    books: JSON.parse(localStorage.getItem('books')) || [],
    book: null,
}

export const bookReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_NEW_BOOK":
            let oldData = JSON.parse(localStorage.getItem('books')) || [];
            oldData.push(action.payload);
            localStorage.setItem('books', JSON.stringify(oldData))    
        return{
            ...state,
            books: [...state.books, action.payload]
        }

        case "GET_ALL_BOOKS":
            let getAllBooks = JSON.parse(localStorage.getItem('books')) || [];
            return {
                ...state,
                books: getAllBooks
            }
    
        default:
            return state;
    }
}