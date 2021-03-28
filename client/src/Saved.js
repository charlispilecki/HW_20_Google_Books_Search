import React, { useState, useEffect } from 'react';
import axios from "axios"
import Book from "./Book"
import { API_URL } from "./api"

export default function Saved() {

    const [books, setBooks] = useState([]);

    async function getSavedBooks() {
        let response = await axios.get(API_URL + `api/books`)
        console.log(response)
        let books = response.data
        setBooks(books)
    }

    useEffect(() => {
        getSavedBooks();
    }, []);

    return (
        <div>
            <h2 className="title has-text-centered">Saved Books</h2>
            <div>
                {books.map(book => {
                    return (
                        <Book 
                            isSaved={true}
                            key={book._id}
                            title={book.title}
                            authors={book.authors}
                            desc={book.desc}
                            img={book.img}
                            link={book.link}
                        ></Book>
                    )
                })}
            </div>
        </div>
    )
}

