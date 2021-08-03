import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {

    return (
    <div className="Meaning my-5">
        <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <p><strong>example: </strong><span className="fst-italic">{definition.example}</span></p>
                        <Synonyms synonyms={definition.synonyms}/>
                    </div>
                )
            })}
    </div>
    )
}