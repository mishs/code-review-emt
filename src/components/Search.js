import React, { useContext, useState } from 'react'
import { DevicesContext } from '../Context/DevicesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Fuse from 'fuse.js'


function Search() {
    const { data, updateSearchQuery, updateSearchResults } = useContext(DevicesContext)
    const [query, setQuery] = useState('')

    function handleInput({ currentTarget = {} }) {
        const { value } = currentTarget
        setQuery(value)
        updateSearchQuery(value)

        updateSearchResults(data.map(dd=>{
            
                let groups = dd.groups.map(group=>{
                    let licenses = group.licenses.filter(license=>{
                        return license.name.toLowerCase().includes(value.toLowerCase()) ||
                         license.model.toLowerCase().includes(value.toLowerCase()) ||
                          license.description.toLowerCase().includes(value.toLowerCase()) ||
                           license.osversion.toLowerCase().includes(value.toLowerCase()) ||
                           group.osversion.toLowerCase().includes(value.toLowerCase()) ||
                           group.group.toLowerCase().includes(value.toLowerCase()) ||
                           group.description.toLowerCase().includes(value.toLowerCase()) ||
                           group.model.toLowerCase().includes(value.toLowerCase())
                    })
                    return {...group,licenses}
                }).filter(grp=> {
                    return grp.licenses.length
                } )
                console.log("licenses",groups)
                return groups.length?{...dd,groups}:null
            }).filter(v=> v))
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

    return (
        <div className="search-input_container">
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
