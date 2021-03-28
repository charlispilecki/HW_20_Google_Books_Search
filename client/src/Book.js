import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./api"

export default function Book({
    title, authors, desc, img, link, isSaved
}) {

    async function saveBook() {
        await axios({
            method: 'post',
            url: API_URL + 'api/books',
            data: {
                title, authors, desc, img, link
            }
          });
    }

    async function deleteBook() {
        await axios({
            method: 'delete',
            url: API_URL + `api/books/${title}`
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

