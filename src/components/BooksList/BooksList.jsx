import React, { Component } from 'react'
import books from '../../data/books.json'
import BookItem from './BookItem/BookItem'

class BooksList extends Component {
  state = {
    sortBy: null,
    books: [...books] // Clonar array {...objeto}
    // books: [] // Clonar array {...objeto}
  }

  sortByRating = () => {
    this.setState((prevState) => {
      return {
        books: [...prevState.books].sort((a, b) => b.rating - a.rating) // Para no modificar el estado original, clonamos el prevState.books, buena practica cuando trabajamos con estados y vamos a hacer operaciones sobre ellos
      }
    })
  }


  sortByName = () => {
    this.setState((prevState) => {
      return {
        books: [...prevState.books].sort((a, b) => a.title.localeCompare(b.title))
      }
    })
  }

  onDeleteBook = (id) => {
    this.setState({ books: this.state.books.filter(book => book.id !== id) })
  }

  render() {
    const { books } = this.state

    return (
      <div className="BooksList mt-4">
        <h1>Books available</h1>

        <button onClick={this.sortByRating}>Sort by rating</button>
        <button onClick={this.sortByName}>Sort by name</button>

        {
          books && books.length > 0
            ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Year</th>
                    <th scope="col">Author</th>
                    <th scope="col">Awarded</th>
                    <th scope="col">Rating</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, i) => (
                    <BookItem
                      key={book.id} {...book}
                      number={i + 1} onDelete={() => this.onDeleteBook(book.id)} // como onDeleteBook necesita saber el id, declaro una arrow function que llama a onDeleteBook pasando el id
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No books available</p>
            )
        }
      </div>
    )
  }
}

export default BooksList