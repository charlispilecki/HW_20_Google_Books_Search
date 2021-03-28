import React, { Component } from "react";

export default function Book({
    title, author, desc, img, link
}) {
    return (
        <div>
            <h3>{title}</h3>
            <a href={link}>{title}</a>
            <h4>{author}</h4>
            <img src={img} />
            <button>View</button>
            <button>Save</button>
            <p>{desc}</p>

            <br></br>
        </div>
    )
}

