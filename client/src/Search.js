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
    //     searchForBooks();
    // }, []);


    //volumeInfo.title, authors[0], description, imageLinks.thumbnail, previewLink

    function handleChange(event) {
        setQuery(event.target.value)
    }

    return (
        <div>
            <h2 className="title has-text-centered">Book Search</h2>
            <div>
                <input className="input" onChange={handleChange} value={query}/>
            </div>
            <div className="is-flex is-justify-content-center mt-2 mx-6">
                <button className="button" onClick={() => searchForBooks(query)}>Search</button>
            </div>
            <br></br>
            <div>
                {books.map(book => {
                    return (
                        <Book 
                            isSaved={false}
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors?.join()}
                            desc={book.volumeInfo.description}
                            img={book.volumeInfo.imageLinks?.thumbnail}
                            link={book.volumeInfo.previewLink}
                        ></Book>
                    )
                })}
            </div>
        </div>
    )
}

