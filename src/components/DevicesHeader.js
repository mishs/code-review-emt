import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import Search from './Search'

function DevicesHeader() {
    return (
        <div className="devices-header">
            <div className="title">
                <FontAwesomeIcon icon={faHome} />
                <h3>Device Overview</h3>
            </div>

            <Search />

            <Button>
                <FontAwesomeIcon icon={faPlus} />
                add
            </Button>
        </div>
    )
}


export default DevicesHeader
