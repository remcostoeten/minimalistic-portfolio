'use client'
import React, { useState } from 'react';

interface SearchFormProps {
    onSearch: (username: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSearch = () => {
        onSearch(username);
    };

    return (
        <div>
            <label htmlFor="username">Enter GitHub Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchForm;
