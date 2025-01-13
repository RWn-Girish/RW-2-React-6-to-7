import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../services/actions/book.action";

function Home() {
  const { books } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllBooks());
  }, [])
  return <div>
    {books.length == 0 ? <h4>Data Not Found</h4> : <table>
      <thead>
        <tr>
          <th>
            Book Title
          </th>
          <th>
            Book Author
          </th>
          <th>
            Category
          </th>
          <th>
            Pages
          </th>
        </tr>
      </thead>
      <tbody>
        {
          books.map((book)=>(
            <tr>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.pages}</td>
            </tr>
          ))
        }
      </tbody>
    </table>}
  </div>;
}

export default Home;
