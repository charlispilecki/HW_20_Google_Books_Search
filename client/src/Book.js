import React, { Component } from "react";

export default function Book({
    name, author, desc
}) {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{author}</h4>
            <button>View</button>
            <button>Save</button>
            <p>{desc}</p>

            <br></br>
        </div>
    )
}

