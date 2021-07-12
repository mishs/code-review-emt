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
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    position: relative;

    svg {
        position: absolute;
        left: 8px;
        top: 8px;
        color: #2A94E3;
    }

    input {
        border: 1px solid #BBBBBB;
        border-radius: 3px;
        padding: 3px 6px 3px 28px;
    }
`

export default Search
