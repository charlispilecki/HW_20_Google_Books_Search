import React, { Component } from "react";
import axios from "axios";

export default function Book({
    title, authors, desc, img, link, isSaved
}) {

    async function saveBook() {
        await axios({
            method: 'post',
            url: 'http://localhost:3001/api/books',
            data: {
                title, authors, desc, img, link
            }
          });
    }

    async function deleteBook() {
        await axios({
            method: 'delete',
            url: `http://localhost:3001/api/books/${title}`
          });
    }

    return (
        <div>
            <h3>{title}</h3>
            <a href={link}>{title}</a>
            <h4>{authors}</h4>
            <img src={img} />
            <button>View</button>
            {isSaved ? <button onClick={deleteBook}>Delete</button> : <button onClick={saveBook}>Save</button>}
            <p>{desc}</p>

            <br></br>
        </div>
    )
}

