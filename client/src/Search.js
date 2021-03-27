import React, { useState, useEffect } from 'react';
import axios from "axios"
import Book from "./Book"

export default function Search() {

    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([]);

    async function searchForBooks() {
        // https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyCu_ihEkFRAHUMWPCsS341IqfE-zA1opoI
        let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCu_ihEkFRAHUMWPCsS341IqfE-zA1opoI`)
        console.log(response)
        let books = response.data.items
        setBooks(books)
    }

    // useEffect(() => {
    //     loadDataOnlyOnce();
    // }, []);


    //volumeInfo.title, authors[0], description

    function handleChange(event) {
        setQuery(event.target.value)
    }

    return (
        <div>
            <h2>Book Search</h2>
            <input onChange={handleChange} value={query}/>
            <button onClick={() => searchForBooks('harry potter')}>Search</button>
            <br></br>
            <div>
                {books.map(book => {
                    return (
                        <Book key={book.id}
                            name={book.volumeInfo.title}
                            author={book.volumeInfo.authors?.length ? book.volumeInfo.authors[0]: ''}
                            desc={book.volumeInfo.description}
                        ></Book>
                    )
                })}
            </div>
        </div>
    )
}

