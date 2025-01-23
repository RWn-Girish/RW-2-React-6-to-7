
import axios from 'axios';
export const addNewBook = () => {
    return {
        type: "ADD_NEW_BOOK",
    }
}

export const addBookRej = (msg) => {
    return {
        type: "ADD_NEW_BOOK_REJ",
        payload: msg
    }
}

export const getAllBooks = (data) => {
    return {
        type: "GET_ALL_BOOKS",
        payload: data
    }
}


export const singleBook = (data) => {
    return {
        type: "SINGLE_BOOK",
        payload: data
    }
}

export const updateBook = () => {
    return {
        type: "UPDATE_BOOK",
    }
}

export const loading = () => {
    return {
        type: "LOADING"
    }
}


export const getAllBooksAsync = () => {
    return (dispatch)=> {
        dispatch(loading())
        axios.get("http://localhost:5100/books")
        .then((res)=> {
            // console.log(res);
            dispatch(getAllBooks(res.data))
        }).catch((err)=> {
            // console.log(err);
            dispatch(addBookRej(err.message))
        })
    }
}


export const addBookAsync = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:5100/books", data)
        .then((res)=> {
            // console.log(res);
            dispatch(addNewBook())
        }).catch((err)=> {
            // console.log(err);
            dispatch(addBookRej(err.message))
        })
    }
}

export const deleteBookAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5100/books/${id}`)
        .then((res)=> {
            // console.log(res);
            dispatch(getAllBooksAsync())
        }).catch((err)=> {
            // console.log(err);
            dispatch(addBookRej(err.message))
        })
    }
}
export const singleBookAsync = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:5100/books/${id}`)
        .then((res)=> {
            // console.log(res);
            dispatch(singleBook(res.data))
        }).catch((err)=> {
            // console.log(err);
            dispatch(addBookRej(err.message))
        })
    }
}
export const updateBookAsync = (data) => {
    return (dispatch) => {
        axios.put(`http://localhost:5100/books/${data.id}`, data)
        .then((res)=> {
            // console.log(res);
            dispatch(updateBook())
        }).catch((err)=> {
            // console.log(err);
            dispatch(addBookRej(err.message))
        })
    }
}