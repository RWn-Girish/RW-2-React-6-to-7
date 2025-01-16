
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

export const deleteBook = (id) => {
    return {
        type: "DELETE_BOOK",
        payload: id
    }
}

export const singleBook = (id) => {
    return {
        type: "SINGLE_BOOK",
        payload: id
    }
}

export const updateBook = (data) => {
    return {
        type: "UPDATE_BOOK",
        payload: data
    }
}