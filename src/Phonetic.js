import React from "react";

export default function Phonetic(props) {
    console.log(props);
    return (
        <div className="Phonetic">
            <p><a class="p-2" href={props.phonetic.audio} title="Listen" target="_blank" rel="noreferrer">📢</a>{props.phonetic.text}</p>
            </div>
        
    )
}