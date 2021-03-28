import React, { useState, useEffect } from 'react';
import axios from "axios"
import Book from "./Book"

export default function Saved() {

    const [books, setBooks] = useState([]);

    async function getSavedBooks() {
        let response = await axios.get(`http://localhost:3001/api/books`)
        console.log(response)
        let books = response.data
        setBooks(books)
    }

    useEffect(() => {
        getSavedBooks();
    }, []);

    return (
        <div>
            <h2>Results</h2>
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
    )
}

