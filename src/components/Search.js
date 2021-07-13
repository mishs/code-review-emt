import React, { useContext, useState, useEffect } from 'react'
import { DevicesContext } from '../Context/DevicesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import Fuse from 'fuse.js'


function Search() {
    const { data, updateSearchQuery, updateSearchResults } = useContext(DevicesContext)
    const [query, setQuery] = useState('')

    function handleInput({ currentTarget = {} }) {
        const { value } = currentTarget
        setQuery(value)
        
    }

    const fuse = new Fuse (data, {
        includeScore: true,
        keys: [
            'groups.group',
            'groups.model',
            'groups.description',
            'groups.licenses',
            'groups.licenses.model',
            'groups.licenses.description'
        ]
    });

    useEffect(() => {
        updateSearchQuery(query)
        updateSearchResults(fuse.search(query))
    }, [query])


    return (
        <StyledDiv>
            <FontAwesomeIcon icon={faSearch} />
            <input 
                type="text" 
                value={query}
                onChange={handleInput}
            />
        </div>
    )
}


export default Search
