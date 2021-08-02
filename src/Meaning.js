import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {

    return (
    <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>{definition.definition}</p>
                        <p><strong>example: </strong><span className="fst-italic">{definition.example}</span></p>
                        <p><Synonyms synonyms={definition.synonyms}/></p>
                    </div>
                )
            })}
    </div>
    )
}