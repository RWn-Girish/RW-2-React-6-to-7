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
        
        case "DELETE_BOOK" : 
            let allRecords = JSON.parse(localStorage.getItem('books'))
            let updatedRec = allRecords.filter((record) => record.id != action.payload)
            localStorage.setItem("books", JSON.stringify(updatedRec));
            return {
                ...state,
                books: updatedRec
            }

        case "SINGLE_BOOK":
            let allBooks = JSON.parse(localStorage.getItem('books'))
            let singleBook = allBooks.find((book) => book.id == action.payload);
            return {
                ...state,
                book: singleBook
            }

        case "UPDATE_BOOK": 
        let getBooks = JSON.parse(localStorage.getItem('books'))
        let updatedBooks = getBooks.map((book)=> {
                if(book.id == action.payload.id){
                    return action.payload
                }else{
                    return book
                }
            })
            localStorage.setItem("books", JSON.stringify(updatedBooks));
            return {
                ...state,
                books: updatedBooks,
                book: null
            }
        default:
            return state;
    }
}