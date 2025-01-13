
export const addNewBook = (data) => {
    return {
        type: "ADD_NEW_BOOK",
        payload: data
    }
}

export const getAllBooks = () => {
    return {
        type: "GET_ALL_BOOKS"
    }
}