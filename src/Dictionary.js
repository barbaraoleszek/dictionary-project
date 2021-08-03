import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

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
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let pexelApiKey = "563492ad6f917000010000018cc14507889e43c0a3e395dac9fd2a6f";
        let headers = { Authorization: `Bearer ${pexelApiKey}` };

        axios.get(apiUrl).then(handleResponse); 
        axios.get(pexelsUrl, {headers: headers} ).then(handlePexelsResponse);   
    }
    
    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input className="form-control" placeholder="Looking for meaning? Ask now!" type="search" onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    )
}