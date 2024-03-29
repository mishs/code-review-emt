import React from 'react'
import { Table } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import Highlight from 'react-highlighter'
import { DevicesContext } from '../Context/DevicesContext'

function Licenses(props) {
    const [offset, setOffset] = React.useState(0)
    const [activePage, setActivePage] = React.useState(1)
    let selectedRow
    let licenses = []
    const { updateActiveRow, filters, updateActiveGroup, updateActiveSGroup,searchQuery } = React.useContext(DevicesContext)

    const [activeId, setActiveId] = React.useState('')

    function toggleClass(id) {
        setActiveId(id);
    }

    function getRow(id) {

        const groups = props.data.map((group) => group.licenses);
        const devices = groups.map((groupLicense) => groupLicense);

        devices.map((device) => device.map((item) => licenses.push(item)));

        selectedRow = licenses.filter((license) => license.id === id);
        selectedRow = Object.assign({ selected: true }, ...selectedRow);

        setActiveId(id)
        updateActiveRow(selectedRow)
        updateActiveGroup(null)
        updateActiveSGroup(null)
    }

    const handleClick = (id) => {
        getRow(id)
        toggleClass(id)
    }
    let filteredData = props.item.licenses.filter(v => {
        let OSVersion = null
        if (filters["OSVersion"].length) {
            filters["OSVersion"].map(v1 => {
                if (v1 == v.osversion) {
                    OSVersion = true
                } else if (OSVersion != true) {
                    OSVersion = false
                }
            })
        }

        let onlineState = null
        if (filters["onlineState"].length) {
            filters["onlineState"].map(v1 => {
                if ((v.online == true) && (v1 == "online")) {
                    onlineState = true
                } else if ((v.online == false) && (v1 == "offline")) {
                    onlineState = true
                } else if (onlineState != true) {
                    onlineState = false
                }
            })
        }

        let deviceState = null
        if (filters["deviceState"].length) {
            filters["deviceState"].map(v1 => {
                if (v.model == v1) {
                    deviceState = true
                } else if ((v1 == "others") && (v.model != "Raspberry Pi 3")) {
                    deviceState = true
                } else if (deviceState != true) {
                    deviceState = false
                }
            })
        }

        let policyState = null
        if (filters["policyState"].length) {
            filters["policyState"].map(v1 => {
                if (v.policy == v1) {
                    policyState = true
                } else if ((v1 == "notApplied") && (v.policy != "applied")) {
                    policyState = true
                } else if (policyState != true) {
                    policyState = false
                }
            })
        }

        let licenseState = null
        if (filters["licenseState"].length) {
            filters["licenseState"].map(v1 => {
                if (v1 == v.license) {
                    licenseState = true
                } else if (licenseState != true) {
                    licenseState = false
                }
            })
        }

        let filtered = OSVersion || onlineState || deviceState || policyState || licenseState

        if ((OSVersion == null) && (onlineState == null) && (deviceState == null) && (policyState == null) && (licenseState == null)) {
            filtered = true
        }

        return filtered
    })
          let pages=[]
            for (let i = 1; i <= Math.ceil(filteredData.length / 5); i++) {
                console.log("for loop",pages,filteredData, Math.ceil(filteredData.length / 5))
                pages.push(
                    <Pagination.Item key={i} active={activePage === i}
                    onClick={
                        ()=>{
                            setOffset((i-1)*5)
                            setActivePage(i)
                        }
                    }
                    >
                        {i}
                    </Pagination.Item>
                )
            }
    return (
        <Table>
            <tbody className="licenses_body">
                {
                    filteredData.filter((paginate, index) => index >= offset && index < (offset + 5)).map((licence, index1) =>
                        <tr onClick={() => handleClick(licence.id)} key={index1} className={`license_row cur-pointer ${licence.id === activeId ? 'active' : ''}`} data-selector={licence.id} >
                            <td>
                                {
                                    index1%2 == 0?
                                    <i class="fas fa-wifi text-white py-2 px-1"></i> 
                                    :
                                    <i class="fas fa-calendar-times text-white py-2 px-1"></i>
                                }
                                &nbsp;&nbsp;
                                <Highlight search={searchQuery}>{licence.name}</Highlight></td>
                            <td><Highlight search={searchQuery}>{licence.model}</Highlight></td>
                            <td><Highlight search={searchQuery}>{licence.osversion}</Highlight></td>
                            <td><Highlight search={searchQuery}>{licence.description}</Highlight></td>
                        </tr>
                    )
                }
                <Pagination className="license_pagination">
                    <Pagination.Prev
                        disabled={offset < 5}
                        onClick={() => setOffset(offset - 5)}
                    />
                    {pages}
                    <Pagination.Next
                        disabled={filteredData.length <= (offset + 5)}
                        onClick={() => setOffset(offset + 5)}
                    />
                </Pagination>
            </tbody>
        </Table>
    )
}

export default Licenses
