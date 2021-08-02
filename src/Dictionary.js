import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js"

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        
    }

    function search(event) {
        event.preventDefault();
        // documentation dictionaryapi.dev
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

        axios.get(apiUrl).then(handleResponse);    
    }
    
    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input className="form-control" type="search" onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    )
}