import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookAsync, getAllBooks, getAllBooksAsync } from "../services/actions/book.action";
import { useNavigate } from "react-router";

function Home() {
  const { books, isLoading } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteBookAsync(id));
  };

  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, []);
  return (
    <div>
      {isLoading ? <h2>Loading....</h2> : books.length == 0 ? (
        <h4>Data Not Found</h4>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Book Title</th>
              <th>Book Author</th>
              <th>Category</th>
              <th>Pages</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.pages}</td>
                <td>
                  <button onClick={() => handleEdit(book.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
