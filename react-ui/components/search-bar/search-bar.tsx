import { useState } from "react"

const SearchBar = (): JSX.Element => {

    const [query, setQuery] = useState<string | null>("");

    function searchButton() {
        setQuery(query)
    }
    function handleEnterButton(e: React.KeyboardEvent <HTMLInputElement>) {
        if(e.key === 'Enter') {
            console.log(query)
        }
    }

    return (
        <>
        <div className="search-container">
            <input 
                type='text' 
                placeholder='search here...' 
                className="search" 
                onChange={e => setQuery(e.target.value)} 
                onKeyUp={handleEnterButton}
            />
            <button onClick={searchButton}>Submit</button>
        </div>
        </>
    )
};

export default SearchBar;