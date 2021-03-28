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
        alert('Book saved!')
    }

    async function deleteBook() {
        await axios({
            method: 'delete',
            url: API_URL + `api/books/${title}`
          });
        window.location.reload()
    }

    return (
        <div className="mb-3 p-4" style={{border: '1px solid black'}}>
            <div className="is-flex is-justify-content-space-between">
                <h3 className="title is-4">{title}</h3>
                <div>
                    <button className="button mr-2" onClick={() => window.location=link}>View</button>
                    {
                    isSaved ? 
                    <button className="button" onClick={deleteBook}>Delete</button> : 
                    <button className="button" onClick={saveBook}>Save</button>
                    }
                </div>
            </div>
            <h4 className="title is-6">Written by: {authors}</h4>
            <div className="is-flex is-justify-content-space-between">
                <img style={{maxHeight: '200px', minHeight: '200px'}} src={img} />
                <p className="p-4 ">{desc}</p>
            </div>
        </div>
    )
}

