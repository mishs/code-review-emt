import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import { DevicesContext } from '../Context/DevicesContext'


function Filters() {
    const { filters, updateFilters,updateData } = useContext(DevicesContext);
    // const [filtersState, setFiltersState] = useState({
    //     onlineState: false,
    //     offlineState: false,
    //     policyNotApplied: false,
    //     policyApplied: false,
    //     licenseOk: false,
    //     licenseExpiring: false,
    //     licenseRunOut: false,
    //     deviceRaspberryPi: false,
    //     deviceOther: false
    // });
    
    console.log(filters,"dsdsdsdsd")
    function toggleFilter(checked,category,value) {
        // setFiltersState(e.target.name)
        let newFilter = filters
        let newCategoryArray = newFilter[category]
        if(checked){
            newCategoryArray.push(value)
        }else{
            newCategoryArray = newCategoryArray.filter(v=>(v!=value))
        }
        newFilter[category] = newCategoryArray
        console.log(newFilter)
        updateFilters(newFilter)
    }

    useEffect(() => {
        // updateData({})
    }, [filters])

    return (
        <Form>
            <div>
                <h3>Filter</h3>
                <FontAwesomeIcon icon={faFilter} /> 
            </div>

            <Section>
                <div>
                    <p>online state</p>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" 
                                    name="onlineState"
                                    onChange={(e)=>toggleFilter(e.target.checked,"onlineState","online")}
                                    defaultChecked={false}
                                />
                                 online
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="offlineState"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"onlineState","offline")}
                                    defaultChecked={false}
                                />
                                 offline
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>policy state</p>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" 
                                    name="notApplied"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"policyState","applied")}
                                    defaultChecked={false}
                                />
                                 applied
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="applied"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"policyState","notApplied")}
                                    defaultChecked={false}
                                />
                                 not applied
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>license</p>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" 
                                    name="allOk"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"licenseState","allOk")}
                                    defaultChecked={false}
                                />
                                 all ok
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="aboutToExpire"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"licenseState","aboutToExpire")}
                                    defaultChecked={false}
                                />
                                 about to expire
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="runOut"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"licenseState","expired")}
                                    defaultChecked={false}
                                />
                                 run out
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>device type</p>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" 
                                    name="raspberryPi"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"deviceState","Raspberry Pi 3")}
                                    defaultChecked={false}
                                />
                                 Rasberry Pi
                            </label>
                        </li>
                        <li>                        
                            <label>
                                <input type="checkbox" 
                                    name="other"
                                    // onChange={toggleFilter}
                                    onChange={(e)=>toggleFilter(e.target.checked,"deviceState","others")}
                                    defaultChecked={false}
                                />
                                 other
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <p>OS version</p>
                    <ul>
                        <li>
                            <Form.Group controlId="1.0.0">
                                <Form.Check type="checkbox" label="1.0.0" 
                                    onChange={(e)=>toggleFilter(e.target.checked,"OSVersion","1.0.0")}
                                />
                            </Form.Group>
                        </li>
                        <li>                        
                            <Form.Group controlId="1.1.0">
                                <Form.Check type="checkbox" label="1.1.0" 
                                    onChange={(e)=>toggleFilter(e.target.checked,"OSVersion","1.1.0")}
                                />
                            </Form.Group>
                        </li>
                    </ul>
                </div>
            </Section>
        </Form>
    )
}

const Section = styled.section`
    ul {
        list-style: none;
        padding: 0;
    }

    .form-group {
        margin-bottom: 0;
    }
`

export default Filters