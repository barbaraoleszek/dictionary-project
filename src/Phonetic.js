import React from "react";

export default function Phonetic(props) {
    console.log(props);
    return (
        <div className="Phonetic">
            <p><a href={props.phonetic.audio} title="Listen" target="_blank" rel="noreferrer">📢</a>{props.phonetic.text}</p>
            <p></p>
            </div>
        
    )
}