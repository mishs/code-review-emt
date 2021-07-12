import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import Search from './Search'
import styled from 'styled-components'

function DevicesHeader() {
    return (
        <Styles>
            <div className="title">
                <FontAwesomeIcon icon={faHome} />
                <h3>Device Overview</h3>
            </div>

            <Search />

            <Button>
                <FontAwesomeIcon icon={faPlus} />
                add
            </Button>
        </Styles>
    )
}

const Styles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h3 {
        font-size: 1rem;
        color: #7B7B7B;
        margin-left: 5px;
        margin-bottom: 0;
    }

    .title {
        display: flex;
        align-items: center;
        margin-left: 2rem;

        svg {
            color: #7B7B7B;
        }
    }

    button {
        background: #fff;
        border: 1px solid #BBBBBB;
        border-radius: 3px;
        color: #2A94E3;
        padding: 3px 6px;

        svg {
            margin-right: 5px;
        }
    }
`

export default DevicesHeader
