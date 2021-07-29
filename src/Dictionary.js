import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
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
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    )
}